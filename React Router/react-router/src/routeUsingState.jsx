import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      page: "/",
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target,
      };
    });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link navigate={this.navigate} target="/">
                  Home
                </Link>
              </li>
              <li>
                <Link navigate={this.navigate} target="/about">
                  About
                </Link>
              </li>
              <li>
                <Link navigate={this.navigate} target="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === "/" && <HomePage />}
          {this.state.page === "/about" && <AboutPage />}
          {this.state.page === "/faq" && <FAQPage />}
        </main>
      </>
    );
  }
}

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

const Link = ({ target, navigate, children }) => {
  return (
    <a
      href={target}
      onClick={(e) => {
        e.preventDefault(); // menghapus behavior default
        navigate(target); // mengubah state berdasarkan target
      }}
    >
      {children}
    </a>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);


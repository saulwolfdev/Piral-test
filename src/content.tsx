import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExtensionSlot } from "piral-core";
import HeaderNav from './components/HeaderNav.js';
import Button from '@mui/material/Button';

export const Home: React.FC = () => (
  <>
  <div>
    {/* <div>
      <h1>Homepage</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quae
        quaerat. Consequuntur, modi! Molestias fugiat tenetur aliquam quia vitae
        eligendi cum odio. Debitis velit dolorum numquam fuga vitae cum eum?
      </p>
    </div>
      <p>
        <Link to="/foo">Subpage</Link>
      </p>

      <Button variant="contained" color="primary">
          Hola, Material-UI
      </Button> */}
      <HeaderNav />
    </div>
  </>
);

export const Subpage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Subpage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
        consectetur, iure nostrum sed, architecto est corporis similique
        explicabo facilis rerum pariatur nihil totam odio omnis fugiat eaque
        repellat cum officia.
      </p>
      <p>
        <button onClick={() => navigate(-1)}>Back</button>
      </p>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header>
      <Link to="/">Home</Link> | <b>Piral with React Router v6</b>
    </header>
    <main>{children}</main>
    <footer>
      <ExtensionSlot
        name="menu-items"
        render={(items) => (
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      />
    </footer>
  </>
);

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ExtensionSlot } from "piral-core";
import HeaderNav from './components/HeaderNav.js';
import CardComponent from './components/CardComponent';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// export const Home: React.FC = () => (
//   <>
//   <div>
//     <div>
//       <h1>Homepage</h1>
//     </div>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quae
//         quaerat. Consequuntur, modi! Molestias fugiat tenetur aliquam quia vitae
//         eligendi cum odio. Debitis velit dolorum numquam fuga vitae cum eum?
//       </p>
//     </div>
//       <p>
//         <Link to="/foo">Subpage</Link>
//       </p>
//     </div>
//   </>
// );

// export const Subpage: React.FC = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <h1>Subpage</h1>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
//         consectetur, iure nostrum sed, architecto est corporis similique
//         explicabo facilis rerum pariatur nihil totam odio omnis fugiat eaque
//         repellat cum officia.
//       </p>
//       <p>
//         <button onClick={() => navigate(-1)}>Back</button>
//       </p>
//     </>
//   );
// };

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <header>
            <HeaderNav />
          </header>
        </Grid>
        <Grid item xs={12} md={8}>
          <CardComponent title="Buenos dias" content="Contenido de la tarjeta." />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent title="Informacion Importante" content="Contenido de la tarjeta." />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardComponent title="Novedades Cargadas" content="Contenido de la tarjeta." backgroundColor= 'purple' color='white' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardComponent title="Temas Cargados" content="Contenido de la tarjeta." backgroundColor= 'blue' color='white' />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent title="Avances Objetivos VP 2023 " content="Contenido de la tarjeta." />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent title="Seguimiento IFA" content="Contenido de la tarjeta." />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardComponent title="Resumenes Ejecutivos" content="Contenido de la tarjeta." />
        </Grid>
      </Grid>
    </Box>
    
    <header>
    </header>
    <main>      
    </main>
    <footer>
      {/* <ExtensionSlot
        name="menu-items"
        render={(items) => (
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      /> */}
    </footer>
  </>
);

import Head from "next/head";
import styled from "styled-components";
const Container = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 1rem auto;
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>InfoCasas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <main>
        <Container>{children}</Container>
      </main>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            background: #f5f5f5;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}

// SCOPED

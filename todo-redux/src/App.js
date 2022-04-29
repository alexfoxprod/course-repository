import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import { ThemeContext } from "./components/context/context";
import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const [themes, setThemes] = useState(theme.light);
  const changeTheme = () => {
    if (themes === theme.light) {
      setThemes(theme.dark);
    } else {
      setThemes(theme.light);
    }
  };

  const tasks = useSelector((state) => state.tasksList.tasks);
  return (
    <Container
      style={{
        background: themes.background,
        color: themes.color,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form />
        </Grid>
        <Typography variant="h1" className="heading">
          Task list
        </Typography>
        {themes === theme.light ? (
          <>
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                cursor: "pointer",
                fontSize: 32,
              }}
              onClick={changeTheme}
            >
              🌕 Change theme to Dark
            </Typography>
            <br />
          </>
        ) : (
          <>
            <Typography
              style={{
                textAlign: "center",
                width: "100%",
                cursor: "pointer",
                fontSize: 32,
              }}
              onClick={changeTheme}
            >
              🌑 Change theme to Light
            </Typography>
            <br />
          </>
        )}
        <Grid item xs={12}>
          <Tasks tasks={tasks} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

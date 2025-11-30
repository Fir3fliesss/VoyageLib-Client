import RegisterForm from "./components/auth/RegisterForm";

function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <RegisterForm />
    </div>
  );
}

export default App;

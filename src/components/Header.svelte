<!-- Header.svelte -->

<script>
  // You can add any script logic here if needed
</script>

<header class="header">
  <div class="logo">
    <img src="images/logo.png" alt="Logo">
    <h1>AssemblyLine PDF</h1>
  </div>
  <nav class="nav-links">
    <a href="/">Home</a>
    <a href="/dashboard">Dashboard</a>
    <a href="/pricing">Pricing</a>
    <a href="/about">About</a>
    <!-- Add more navigation links here -->
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
  }

  .logo img {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }

  .nav-links a:hover {
    text-decoration: underline;
  }
</style>

<h1>This project was made to control entry and exit of users</h1>
<img src="https://github.com/user-attachments/assets/198006db-b0e3-4f1f-b811-7b8562b590f5">
<h3>It was made with Next.js 15v (App router)</h3>
<h4>Libs used: </h4>
<ol>
  <li><p><strong><a href="https://next-auth.js.org/">Next-Auth</a></strong> to create JWTs for the users, differentiating between "USERS" and "ADMINS"</p></li>
  <li><p><strong><a href="https://www.npmjs.com/package/bcryptjs">Bcryptjs</a></strong> to generate password hashes and save them in database.</p></li>
  <li><p><strong><a href="https://node-postgres.com">PG</a> (PostgreSQL)</strong> to connect the API with the database.</p></li>
</ol>


<h2>About</h2>
<p>The goal of the project was to train back-end with js, learn to work with the PostgreSQL databases and learn about web tokens and your libs.</p>
<h2>Clone with git</h2>
<pre><code>git clone https://github.com/ALAN-MS-SU/user-control.git</code></pre>
<h1>How start this project</h1>
<h2>Create the .env file and fill in all environment variables (you also need to create your database)</h2>
<pre><code>db_port = 
db_user = 
db_host = 
db_password = 
db_name = 
NEXT_PUBLIC_URL = "http://localhost:3000"
NEXTAUTH_URL = "http://localhost:3000/login/sigIn"
NEXTAUTH_SECRET = 
hash_number= "8"</code></pre>
<h2>How start as dev</h2>
<h3>It's Necessary to have <a href="https://nodejs.org/pt">Node.js</a> installed on your computer</h3>
<pre><code>npm i</code></pre>
<pre><code>npm run dev</code></pre>
<h2>How start with Docker</h2>
<h3>It's Necessary to have <a href="https://www.docker.com/">Docker</a> installed on your computer</h3>
<pre><code>docker compose up -d</code></pre>
<h3>To access at <a href="http://localhost:3000">http://localhost:3000</a> (dev and docker)</h3>

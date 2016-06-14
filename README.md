
<h1>Liaison Style Guide App built using Angular 2 and Bootstrap 4 </h1>
<h3 >Installation&nbsp;Steps</h3>
<p>If you don’ have the following scripts installed already, please do so now:</p>
<ul>
<li>Download and install <a href="https://git-scm.com/">git</a></li>
<li>Download and install nodejs <a href="https://nodejs.org">https://nodejs.org</a></li>
</ul>
<p><strong>Note</strong>: Make sure you have Node version &gt;= 4.0 and <span class="caps">NPM</span> &gt;=&nbsp;3</p>
<p>Once you have those, copy the following script to install some global dependencies:</p>
<pre>npm install -g bower webpack webpack-dev-server typings typescript</pre>
<h2 id="clone-repository-and-install-dependencies">Install&nbsp;dependencies, Run style guide</h2>
Once you've cloned the repo, cd into the folder and install dependencies
<pre>cd Liaison-Admin-Style-Guide
npm install</pre>
<p>This will setup a working copy of Liaison-Admin-Style-Guide on your local&nbsp;machine.</p>
<h2 id="running-local-copy">Running local&nbsp;copy</h2>
<p>To run a local copy in development mode,&nbsp;execute:</p>
<pre> npm start</pre>
<p>Go to <a href="http://localhost:3000">http://localhost:3000</a> in your&nbsp;browser.</p>
<p>To run the local copy in production mode and build the sources,&nbsp;execute:</p>
npm run prebuild:prod &amp;&amp; npm run build:prod &amp;&amp; npm run server:prod

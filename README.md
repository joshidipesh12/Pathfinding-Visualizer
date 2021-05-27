![GitHub Logo](./public/styling/c_icon.png)

# Pathfinding Visualizer

> Welcome to Pathfinding Visualizer! I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action. I hope that you enjoy playing around with this visualization tool just as much as I enjoyed building it. You can access it here (use Google Chrome!): https://clementmihailescu.github.io/Pathfinding-Visualizer/

## Meet the Algorithms

This application supports the following algorithms:

**Dijkstra's Algorithm** (weighted): the father of pathfinding algorithms; guarantees the shortest path

**A\* Search** (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm

**Greedy Best-first Search** (weighted): a faster, more heuristic-heavy version of A\* ; does not guarantee the shortest path

**Swarm Algorithm** (weighted): a mixture of Dijkstra's Algorithm and A\* ; does not guarantee the shortest-path

**Convergent Swarm Algorithm** (weighted): the faster, more heuristic-heavy version of Swarm; does not guarantee the shortest path

**Bidirectional Swarm Algorithm** (weighted): Swarm from both sides; does not guarantee the shortest path

**Breath-first Search** (unweighted): a great algorithm; guarantees the shortest path

**Depth-first Search** (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path

On top of the pathfinding algorithms listed above, I implemented a **Recursive Division** Maze Generation algorithm.

## More about the Swarm Algorithm

The Swarm Algorithm is an algorithm that I - at least presumably so (I was unable to find anything close to it online) - co-developed with a good friend and colleague, Hussein Farah. The algorithm is essentially a mixture of Dijkstra's Algorithm and A* Search; more precisely, while it converges to the target node like A* , it still explores quite a few neighboring nodes surrounding the start node like Dijkstra's. The algorithm differentiates itself from A\* through its use of heuristics: it continually updates nodes' distance from the start node while taking into account their estimated distance from the target node. This effectively "balances" the difference in total distance between nodes closer to the start node and nodes closer to the target node, which results in the triangle-like shape of the Swarm Algorithm. We named the algorithm "Swarm" because one of its potential applications could be seen in a video-game where a character must keep track of a boss with high priority (the target node), all the while keeping tracking of neighboring enemies that might be swarming nearby.

## Setup

# Initializing a Repository

If you have a project directory that is currently not under version control and you want to start controlling it with Git, you first need to go to that project’s directory. If you’ve never done this, it looks a little different depending on which system you’re running:

- for Linux: $ cd /home/user/my_project

- for macOS: $ cd /Users/user/my_project

- for Windows: $ cd C:/Users/user/my_project

- and type: $ git init

This creates a new subdirectory named .git that contains all of your necessary repository files--a Git repository skeleton. At this point, nothing in your project is tracked yet.

## Cloning and forking repositories

Repositories on GitHub are remote repositories. If you want to get a copy of an existing Git repository-- for example, a project you’d like to contribute to -- the command you need is git clone. You can clone or fork a repository with GitHub Desktop to create a local repository on your computer.
You can create a local copy of any repository on GitHub that you have access to by cloning the repository.

- You can also clone a repository directly from GitHub or GitHub Enterprise.

1. In the File menu, click Clone Repository.
2. Click the tab that corresponds to the location of the repository you want to clone. You can also click URL to manually enter the repository location.
3. Choose the repository you want to clone from the list.
4. Click Choose... and navigate to a local path where you want to clone the repository.
5. Click Clone.

- You clone a repository with git clone <url>.
- git clone https://github.com/clementmihailescu/Pathfinding-Visualizer.git

## Installing nodemon

- nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

- Either through cloning with git or by using npm (the recommended way): npm install -g nodemon
  And nodemon will be installed globally to your system path.

- You can also install nodemon as a development dependency: npm install --save-dev nodemon

  With a local installation, nodemon will not be available in your system path. Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start) or using npx nodemon.

# Running Npm script

## Npm as a local dependency

> first of all, install npm with

    $ npm install --save-dev npm

> then, create a .js file

    $ touch index.js && open index.js

> import npm

    const npm = require("npm");

> let npm loading the current project

    npm.load();

> pass a callback to the npm.load() API and run the script of your

    npm.load(() => npm.run("SCRIPT_NAME"));

## Access GitHub project into your localhost:

1. First clone it from GitHub with git clone command as mentioned above.

2. Type in your cmd: cd OpenExchange

3. Run this command npm install, it will install all required dependencies and modules.

4. Type node run.js to run.
   **(This is different, incase the server file has some different names, sometimes it has index.js or app.js. Run as per your server file)**

5. Open Chrome, run with your port number. E.g. localhost:1337

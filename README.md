# html2pdfEcho
I'm trying to use express and nodejs with an html2pdf package to make some experience 

clone the repository build the container image with

docker build -t {name} .  //don't forget the dot at the end

then run the container

docker run -v $(pwd)/app:/dev/app --rm -it {name} 

it will start a container linking the app folder from your project directory in the container context so that every change will restart the node server

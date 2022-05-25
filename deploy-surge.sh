# create build folder 
npm run build

#move to build folder
cd build

#clone index.html into 200.html
cp index.html 200.html

#starting deploy via surge
#The commands mean deploy current folder to domain genistar-photo-app.surge.sh
surge . genistar-photo-app.surge.sh 
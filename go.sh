#sudo apt-get -y install software-properties-common
#sudo add-apt-repository ppa:webupd8team/java
#sudo apt-get update
#sudo apt-get -y install java-common oracle-java8-installer
#sudo apt-get -y install oracle-java8-set-default
source /etc/profile

export JAVA_HOME=$(readlink -f /usr/bin/javac | sed "s:/bin/javac::")
export PATH=$JAVA_HOME/bin:$PATH

#sudo add-apt-repository ppa:cwchien/gradle
#sudo apt-get update
#sudo apt-get -y install gradle
#sudo add-apt-repository ppa:maarten-fonville/android-studio
#sudo apt-get update
#sudo apt-get -y install android-studio



# download android sdk
#wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip
#sudo apt-get install unzip
#mkdir -p ~/Android/Sdk/
#unzip sdk-tools-linux-3859397.zip -d ~/Android/Sdk/

export ANDROID_HOME="/home/$(whoami)/Android/Sdk/"
export PATH="${ANDROID_HOME}tools/bin/:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/:${PATH}";

# install all sdk packages
#android update sdk --no-ui
#sdkmanager --update
#sdkmanager "platform-tools" "build-tools;26.0.3"  "platforms;android-26"
#ls ${ANDROID_HOME}

#sudo apt-get -y install bzip2
#curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh; nvm i --lts;
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
#npm i -g yarn ember-cli corber cordova http-server
#npm install
#npm install
#rm -rf corber
#sed -i '/corber/d' ./package.json
#corber init
#corber platform remove android
#corber platform add android
#corber proxy requirements
#corber serve --platform=android
corber build --platform=android
sed -i 's%href="/%href="%g' ./corber/cordova/www/index.html
sed -i 's%src="/%src="%g' ./corber/cordova/www/index.html
corber b --sfb --platform=android
http-server -p 3000 ./corber/cordova/platforms/android/app/build/outputs/apk/debug/
#corber proxy run android --device --nobuild

#Assist [![Build Status](https://travis-ci.org/uhm-coe/assist.svg?branch=master)](https://travis-ci.org/uhm-coe/assist)

Documentation for Assist can be found in its [Wiki Pages](https://github.com/uhm-coe/assist/wiki).

## Further Reading
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

## Getting Started

1. **Install Pre-requisites**

	Ubuntu
	```
	sudo apt-get update
	```
	- Recommend installing RVM (Ruby Version Manager) for installing Ruby
	```
	gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
	\curl -sSL https://get.rvm.io | bash -s stable
	```
	Install NodeJS
	```
	sudo apt-get install nodejs
	```

	Mac OSX
	- Recommend installing RVM (Ruby Version Manager) for installing Ruby
	```
	gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
	\curl -sSL https://get.rvm.io | bash -s stable
	```
	- Recommend installing Homebrew for installing nodejs
	```
	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	```
	Installing NodeJS through Homebrew
	```
	brew install node
	```

2. **Install Jekyll and dependencies**
	
	```
	gem install jekyll
	gem install jekyll-paginate
	```

3. **Clone the repo**
  
  ```
  git clone https://github.com/uhm-coe/assist.git
  cd assist
  ```

4. **Start Jekyll**
	```
	jekyll serve
	```

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

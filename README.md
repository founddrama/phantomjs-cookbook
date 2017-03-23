# The PhantomJS Cookbook

This repository is the sample code that goes along with the book
_[The PhantomJS Cookbook](http://goo.gl/NJnFq1)_. The book is a deep-dive into
[PhantomJS](http://phantomjs.org/), its core APIs, and the eco-system of testing
tools that have sprung up around it.

![PhantomJS Cookbook cover](https://images-na.ssl-images-amazon.com/images/I/517EQf5-aoL._SX258_BO1,204,203,200_.jpg)

### What's here?

The chapters break down as follows:

1. **Getting Started with PhantomJS**
2. **The PhantomJS Core Modules**
3. **Working with `webpage` Objects**
4. **Unit Testing with PhantomJS**
5. **Functional and End-to-End Testing with PhantomJS**
6. **Network Monitoring and Performance Analysis**
7. **Generating Images and Documents with PhantomJS**
8. **Continuous Integration with PhantomJS**

### What do you need?

Here is what you'll need to run the recipes:

* **[PhantomJS](http://phantomjs.org/download.html)** - (version 1.9 or greater)
  "the headless WebKit"; you will need this for every recipe.
  * You'll also want to download the PhantomJS source code:
    [github.com/ariya/phantomjs](https://github.com/ariya/phantomjs)
* **[Node.js](http://nodejs.org/download/)** - (version 0.10.2 or greater) to run
  the `phantomjs-sandbox` demo app that most of the recipes reference.
* **[Java](http://java.com/en/download/index.jsp)** - (Java SE Runtime Environment
  1.7.0_45 or greater) for a couple of the recipes (especially those involving
  [Selenium](http://www.seleniumhq.org/)); and on that note:
  * [Selenium](http://docs.seleniumhq.org/download/) version 2.39.0 or greater; and
  * [Maven](http://maven.apache.org/download.cgi) version 3.0.9 or greater.
* **[Ruby](https://www.ruby-lang.org/en/downloads/)** - (version 1.9.3 or greater)
  for the recipes that involve [Capybara](http://jnicklas.github.io/capybara/)
  and [Poltergeist](https://github.com/teampoltergeist/poltergeist).
* **[Python](https://www.python.org/downloads/)** - (version 2.6 or greater) for
  the recipes that involve [CasperJS](http://casperjs.org/).

#### And what else?

If you are following along from the book, then you may also want to pick up and
install the following as well:

* **[WebStorm](http://www.jetbrains.com/webstorm/download/)** version 7.0.3 or greater;
* **[Jenkins CI](http://jenkins-ci.org/)** version 1.552 or greater; and/or

#### How do I get started?

Once you have cloned this repository and installed the above software, the only
other things you might need to do:

1. **Expose `PHANTOMJS_SOURCE` as a variable in your shell.** Remember the path
   where you cloned the PhantomJS source code? Export that to your shell as
   `PHANTOMJS_SOURCE`.
2. **Install the Node.js modules for the demo app.** `cd` into this repo's
   `phantomjs-sandbox` directory and install the Node.js dependencies with
   `npm install`
3. **Get YSlow as a submodule.** If you're unfamiliar with this process, `cd`
   into the project's directory and enter: `git submodule init && git submodule update`
4. ...and you're done.

## Licenses

Let's do this informally, so it's easier for everyone:

1. Everything in here that _I_ wrote (short version: the recipes) is under the
   [MIT license](http://opensource.org/licenses/MIT).
2. I tapped into the wonderful open source community and used a bunch of awesome
   tools for a bunch of these recipes; in those cases (short version: most of the
   stuff in the `lib` directory) I tried to include their existing licenses
   because I recognize those items as their intellectual property and want to
   respect that and properly credit them.
3. If you believe that I'm including something here in violation of its license
   agreement, please contact me and give me the chance to make it right.

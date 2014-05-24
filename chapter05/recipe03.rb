require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:3000'

THE_TEXT = 'PhantomJS + Capybara + Poltergeist'

#
# PhantomJS Cookbook
# Chapter 5 | Functional and End-to-end Testing with PhantomJS
# Recipe 3  | Adding Poltergeist to a Capybara suite
#
module CookbookCapybaraDemo
  class Demo
    include Capybara::DSL
    def test_input_demo
      visit '/input-demo'
      fill_in 'demo', :with => THE_TEXT
      find('#demo').native.send_key(:Enter)
      find('#stage').text
    end
  end
end

demo = CookbookCapybaraDemo::Demo.new
text = demo.test_input_demo

puts "=> input '#{THE_TEXT}' and #stage received '#{text}' (same = #{text == THE_TEXT})"
require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:3000'

module CookbookCapybaraDemo
  class Demo
    include Capybara::DSL
    def precise_click
      page.driver.resize 1280, 1024
      visit '/precision-click'
      page.driver.click 1280 - 21, 1024 - 21
    end
  end
end

demo = CookbookCapybaraDemo::Demo.new
demo.precise_click
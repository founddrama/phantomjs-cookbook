require 'rubygems'
require 'capybara'
require 'capybara/dsl'
require 'capybara/poltergeist'

Capybara.run_server = false
Capybara.default_driver = :poltergeist
Capybara.app_host = 'http://localhost:3000'

OUTPUT_STRING   = "=> Captured as '%s'"
RESOURCE        = '/css-demo'
SCREENSHOT_NAME = 'chapter05-recipe04%s.png'

module CookbookCapybaraDemo
  class Demo
    include Capybara::DSL
    def capture_viewport
      page.driver.resize 1280, 1024
      visit RESOURCE
      screenshot_name = SCREENSHOT_NAME % ['-viewport']
      save_screenshot(screenshot_name)
      puts OUTPUT_STRING % [screenshot_name]
    end
    def capture_full_page
      page.driver.resize 1280, 1024
      visit RESOURCE
      screenshot_name = SCREENSHOT_NAME % ['-fullpage']
      save_screenshot(screenshot_name, :full => true)
      puts OUTPUT_STRING % [screenshot_name]
    end
    def capture_element(selector = 'body')
      visit RESOURCE
      screenshot_name = SCREENSHOT_NAME % ["-#{selector.gsub /\W/, ''}"]
      save_screenshot(screenshot_name, :selector => selector)
      puts OUTPUT_STRING % [screenshot_name]
    end
    def capture_after_scroll(distance = 500)
      page.driver.resize 1280, 1024
      visit RESOURCE
      page.driver.scroll_to(0, distance)
      # page.execute_script "window.scrollBy(0,#{distance})"
      screenshot_name = SCREENSHOT_NAME % ["-scroll-#{distance}"]
      save_screenshot(screenshot_name)
      puts OUTPUT_STRING % [screenshot_name]
    end
  end
end

t = CookbookCapybaraDemo::Demo.new
t.capture_viewport
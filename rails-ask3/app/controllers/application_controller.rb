class ApplicationController < ActionController::Base
    include SessionsHelper
    
    private
        def logged_in_user
            unless logged_in?
                store_location
                redirect_to http://localhost:3000
end

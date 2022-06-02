class ApplicationController < ActionController::Base
    include SessionsHelper

    def logged_in_user
        unless logged_in?
            store_location
        end
    end
end

class SessionsController < ApplicationController
  protect_from_forgery with: :null_session
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      reset_session
      remember user
      log_in user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      #error message
    end
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def destroy
    log_out if logged_in?
    #redirect_to root_url
  end
end
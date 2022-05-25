class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @user = User.all
  end
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      reset_session
      log_in @user
    else
      redirect_to 'INSERT HERE'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
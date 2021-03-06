class MicropostsController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    before_action :logged_in_user, only: [:create, :destroy]

    def data
        @posts = Micropost.all
        render json: @posts
    end

    def create
        @user = User.find(1)
        @micropost = @user.microposts.create(micropost_params)
        if @micropost.save 
            puts 'micropost saved'
        end
    end

    #def destroy
    #end

    private
        def micropost_params
            params.require(:micropost).permit(:name, :content, :post_type, :title)
        end
end

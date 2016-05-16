class PostsController < ApplicationController
  def index
    @posts = Post.all.order('created_at DESC')
  end

  def show
    if params[:id] == '666'
      render 'posts/broken', :status => 451
    elsif params[:id] == '204'
      render :status => 204
    else
      @post = Post.find(params[:id])
    end
  end

  def create

  end

  def destroy
    @post = Post.find(params[:id]).destroy
  end
end
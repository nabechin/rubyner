class ProductsController < ApplicationController
  def index
    render json: { status: "SUCCESS", message: "hello world" }
  end
end

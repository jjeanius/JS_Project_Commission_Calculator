class ProductsController < ApplicationController

    def index
        @products = Product.all
        render json: @products
    end

    def show
        @product = Product.find_by(id: params[:id])
        redner json: @products
    end

    def new
        @product = Product.create(product_params)
        render json: @products
    end

    def edit
        @product = Product.find_by(id: params[:id])

        if @prodruct.save
            render json: @products
        else
            render 'edit'
        end
    end

    def update
        @product = Product.find_by(id: params[:id])
        if @product.update
            render json: @products
        else
            render 'edit'
        end
    end

    def destory
        @product = Product.find_by(id: params[:id])
        @product.delete
        render json: @Products
    end

    private

    def product_params
        params.require(:product).permit(:name)
    end


end

class ProductsController < ApplicationController

    def index
        @products = Product.all
            render json: @products
    end

    def new
        @product = Product.new(product_params)
            @product.save
            render json: @products
    end

    def create
        @product = Product.new(product_params)
            if @product.save
                render json: @product
            else
                render 'index'
            end
        end

    def show
        set_product
        options ={
            include: [:sales]
        }
        render json: @product
    end

    def edit
        set_product
            if @prodruct.save
                options ={
                    include: [:sales]
                }
                render json: @product
            else
                render 'edit'
            end
    end

    def update
        set_product
        if @product.update
            render json: @products
        else
            render 'edit'
        end
    end

    def destory
        set_product
        @product.delete
        render json: @products
    end

    private

        def product_params
            params.require(:product).permit(:name)
        end

        def set_product
            @product = Product.find_by(id: params[:id])
        end

end

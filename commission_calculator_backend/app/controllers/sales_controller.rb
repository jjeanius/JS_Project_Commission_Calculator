class SalesController < ApplicationController

    def index
        @sales = Sale.all
        render json: @sales
    end

    def show
        @sale = Sale.find_by(id: params[:id])
        render json: @sales
    end

    def new
        @sale = Sale.create(sales_params)
        render json: @sales
    end

    def update
        @sale = Sale.find_by(id: params[:id])

        if @sales.update
            render json: @sales
        else
            render 'edit'
        end
    end

    def destroy
        @sale = Sale.find_by(id: params[:id])
        @sale.delete
        render json: @sales
    end

    private

        def sales_params
            params.require(:sale).permit(:commission_rate_basis_point, :commission_rate_percentage, :quantity)
        end

end

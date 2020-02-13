class SalesController < ApplicationController

  def index
    if @sales = Sale.all
      
      render json: @sales
    end

    end

  def new
    @sale = Sale.new(sale_params)
      @sale.save
      render json: @sales
    end

  def create
    @sale = Sale.new(sale_params) #  update the sales_params to accept employee_id
      if @sale.save
        render json: @sales
      else
        render 'new'
    end
  end

  def show
    set_sale
      options = {
      include: [:products]
    }
    render json: @sale
  end

  def update
    set_sale
      if @sale.update(sale_params)
        render json: @sales
      else
        render 'edit'
      end
  end

  def edit
    set_sale
    render json: @sales
  end

  def destroy
    set_sale
      @sale.destroy
      render json: @sales
  end

  def commission_amount
   @calculate_commission = commission_amount
  end



  private

  def set_sale
    @sale = Sale.find_by(id: params[:id])
  end

  def sale_params
    params.require(:sale).permit(:product_id,
      :quantity,
      :price,
      :commission_rate,
      :commission_amount,
      :commission_type)
  end

 end
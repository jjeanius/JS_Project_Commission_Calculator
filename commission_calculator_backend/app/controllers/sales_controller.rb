class SalesController < ApplicationController

  def index
      @sales = Sale.all
      render json: @sales
  end

  def new
    @sale = Sale.new(sale_params)
      @sale.save
      render json: @sales, status: 200
    end

  def create
    @sale = Sale.new(sale_params) #  update the sales_params to accept employee_id
      # binding.pry
    if @sale.save
        calculate_commission
         binding.pry
            render json: @sale, status: 200

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
        calculate_commission
        render json: @sales
      else
        render 'edit'
      end
  end

  def edit
    if set_sale
       calculate_commission
        render json: @sales
    else
      render 'edit'
    end
  end

  def destroy
    set_sale
      @sale.destroy
      render json: @sales
  end

  def commission_amount
   calculate_commission
   render json: @sales
  end


  private

  def set_sale
    @sale = Sale.find(params[:id])
  end

  def sale_params
    params.require(:sale).permit(
      :product_id,
     #\ :product_name,
      :price,
      :quantity,
      :commission_rate,
      :commission_type,
      :commission_amount
    )
  end

  def calculate_commission
    if @commission_type == "basis_point"  # basis point calculation
      @sale.commission_amount = (@sale.quantity * @sale.price)/10000 * @sale.commission_rate
    else #   commissiom_type == "percentage"  # percentage calculation
        @sale.commission_amount = (@sale.quantity * @sale.price)* @sale.commission_rate/100
    end
  end


end
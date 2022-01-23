class Api::V1::SampleController < ApplicationController
  def index
    render json: { status: 200, message: "Hello World!"}
  end
end
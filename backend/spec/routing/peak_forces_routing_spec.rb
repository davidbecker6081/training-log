require "rails_helper"

RSpec.describe PeakForcesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/peak_forces").to route_to("peak_forces#index")
    end

    it "routes to #show" do
      expect(get: "/peak_forces/1").to route_to("peak_forces#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/peak_forces").to route_to("peak_forces#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/peak_forces/1").to route_to("peak_forces#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/peak_forces/1").to route_to("peak_forces#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/peak_forces/1").to route_to("peak_forces#destroy", id: "1")
    end
  end
end

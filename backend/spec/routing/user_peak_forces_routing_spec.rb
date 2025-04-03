require "rails_helper"

RSpec.describe UserPeakForcesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/user_peak_forces").to route_to("user_peak_forces#index")
    end

    it "routes to #show" do
      expect(get: "/user_peak_forces/1").to route_to("user_peak_forces#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/user_peak_forces").to route_to("user_peak_forces#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/user_peak_forces/1").to route_to("user_peak_forces#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/user_peak_forces/1").to route_to("user_peak_forces#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/user_peak_forces/1").to route_to("user_peak_forces#destroy", id: "1")
    end
  end
end

require "rails_helper"

RSpec.describe HandTypesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/hand_types").to route_to("hand_types#index")
    end

    it "routes to #show" do
      expect(get: "/hand_types/1").to route_to("hand_types#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/hand_types").to route_to("hand_types#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/hand_types/1").to route_to("hand_types#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/hand_types/1").to route_to("hand_types#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/hand_types/1").to route_to("hand_types#destroy", id: "1")
    end
  end
end

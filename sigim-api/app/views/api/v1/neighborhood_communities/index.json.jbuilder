json.neighborhood_communities @neighborhood_communities do |neighborhood_community|
  json.id neighborhood_community.id
  json.neighborhood neighborhood_community.neighborhood
  json.community neighborhood_community.community
end

require 'test_helper'

class GamesControllerTest < ActionDispatch::IntegrationTest
  test "should get clickone" do
    get games_clickone_url
    assert_response :success
  end

  test "should get clickfive" do
    get games_clickfive_url
    assert_response :success
  end

  test "should get numbers" do
    get games_numbers_url
    assert_response :success
  end

end

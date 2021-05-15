from selenium.webdriver import Chrome
import pytest


@pytest.fixture
def getDriver():
    #Connect to the Chrome WebDriver
    driver = Chrome()
    driver.set_window_size(1024, 768)

    #Go to the website under test
    driver.get("https://main.d2is36yekpva4s.amplifyapp.com/")
    return driver


def test_add_first_player(getDriver):
    assert len(getDriver.window_handles) == 1
    #Navigate to a new lane to do the text (lane 16)
    lanes = getDriver.find_elements_by_class_name("lane")
    lane16Button = next(l for l in lanes if (l.text=="Lane 16"))
    lane16Button.click()
    
    input = getDriver.find_element_by_class_name("textInput")
    button = getDriver.find_element_by_class_name("buttonSmallBlue")

    input.send_keys("Player 1")
    button.submit()

    #Check that the input still exists
    assert input != None

    #Check that the name of the newly added player is listed on the screen
    listPlayerDiv = getDriver.find_element_by_id("list-player")
    playerDivs = listPlayerDiv.find_elements_by_xpath("//*[ text() = 'Player 1' ]")
    assert len(playerDivs) > 0


def test_add_second_player(getDriver):
    #Get to the state of the pervious test with the first player added
    test_add_first_player(getDriver)

    #Get the input form and add a 2nd player
    input = getDriver.find_element_by_class_name("textInput")
    button = getDriver.find_element_by_class_name("buttonSmallBlue")
    input.send_keys("Player 2")
    button.submit()

    #Check that the input still exists
    input = getDriver.find_elements_by_class_name("textInput")
    assert len(input) > 0

    #Check that the start button appears with 2 players
    startButton = getDriver.find_elements_by_id("start-button")
    assert len(startButton) > 0

    #Get all fields that contain the word "Player ", representing both players added
    listPlayerDiv = getDriver.find_element_by_id("list-player")
    playerDivs = listPlayerDiv.find_elements_by_xpath("//*[ contains (text(),'Player ') ]")

    #Should be 2 players with the names in the correct order
    assert len(playerDivs) == 2
    assert playerDivs[0].text == "Player 1"
    assert playerDivs[1].text == "Player 2"

    getDriver.close()
# InfinityCardGenerator
<p>The Infinity Card Generator is intended to be a simple web page that will assist players of the Infinity miniatures game by Corvus Belli in creating cards for their units.  Here is an example of a few generated, printed, and used cards:</p>

<br>
<a href="http://imgur.com/b53dxFr"><img src="http://i.imgur.com/b53dxFr.jpg" title="source: imgur.com" /></a>
<br>

<p>The Card Generator is currently in its infancy, and is barely usable.  However, here is a basic tutorial of how to use it:</p>

<ol>
  <li>First, create a picture of the miniature you wish to feature in the card. This picture needs to have the aspect ratio of 80 wide by 90 tall. Personally, I crop my pictures down to 160 by 180 before uploading them to my personal site.</li>
  <li>Now the fun begins! Start entering information about your unit.  You'll probably want to pull up the <a href="http://www.infinitythegame.com/army">Infinity Army Builder</a> for the stats.</li>
  <li>Unfortunately, there's not a ton of room on the card for all of the items and abilities of some units. One of the first updates will be to add a back side to the card. If you want the Background of your character on the Front, check the Background on Front box.</li>
  <li>Also, the odds are pretty good that your unit's weapons, skills, and equipment are not available for selection. There is a lot of that stuff in Infinity, and I'm working on it.</li>
  <li>When you're ready to save your progress, you'll need to do this by hand for now. Instead of saving it to a spiffy backend, you will need to manage it yourself. Check the "Show Json" button, select all the text, and paste it into a text file for safe keeping. When you want to bring the unit you worked on back check the "Show Json" button, and paste the text of the file into that code block. I know this is probably confusing. Sorry.</li>
  <li>When you're happy with how the card looks, it's time to print! Check the "Hide Input" button and print it from your browser! The output is intended to fit inside a 80mm x 120mm sleeve. You may have to do some fidgeting to get it to work unfortunately, but I know that it works in Chrome on Windows and Ubuntu. Firefox on Windows and Ubuntu has some CSS issues, but prints out okay as well.<li>
</ol>

<p>Here are some coming features of the product (in an unprioritized order):</p>

<ul>
  <li>Backside of the card.</li>
  <li>More skills, weapons, and equipment to select from.</li>
  <li>Populating skills and stats from unit selection. In other words, when I select Caledonian Volunteer, all of that units stats will be populated.</li>
  <li>Multiple themes for the cards.</li>
  <li>Combining multiple cards per page.</li>
</ul>

<p>And here are some things that unfortunately are a long way off:</p>

<ul>
  <li>Backend persistence. In other words, you'll need to keep storing things by hand.</li>
  <li>Multi-language support. Truly sorry about this one, but this project is equal parts a tool intended for the community and 
</ul>

Please note: Infinity is &copy;2015 Corvus Belli S.L.L. Their content is currently used without permission. Permission is being requested. You can <a href="http://www.infinitythegame.com">visit their site here</a> for more information on Infinity.

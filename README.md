# InfinityCardGenerator
<p>The Infinity Card Generator is intended to be a simple web page that will assist players of the Infinity miniatures game by Corvus Belli in creating cards for their units.  Here is an example of a few generated, printed, and used cards:</p>

<br>
<a href="http://imgur.com/b53dxFr"><img src="http://i.imgur.com/b53dxFr.jpg" title="source: imgur.com" /></a>
<br>

<p>The Card Generator is currently in its infancy, and is barely usable.  However, here is a basic tutorial of how to use it:</p>

<ol>
  <li>First, create a picture of the miniature you wish to feature in the card. For best results, this picture should have the aspect ratio of 8 wide by 9 tall.  The resulting image will be about an inch tall, so if you are printing at 300 dpi, a recommended resolution would be 266 by 300. You will then need to upload the picture to an image hosting site such as Imgur, Wordpress, or even Google Photo.</li>
  <li>Now the fun begins! Start entering information about your unit.  You'll probably want to pull up the <a href="http://www.infinitythegame.com/army">Infinity Army Builder</a> for the stats.</li>
  <li>Also, the odds are pretty good that your unit's weapons, skills, and equipment are not available for selection. There is a lot of that stuff in Infinity, and I'm working on it.</li>
  <li>When you're ready to save your progress, you'll need to do this by hand for now. Instead of saving it to a spiffy backend, you will need to manage it yourself. When you are ready to save, click the Save To PC button. This should trigger a download with a name of "your unit.json".  For example, "William Wallace.json".</li>
  <li>When you're happy with how the card looks, it's time to print! This is the part that may only work on Chrome unfortunately. When you go to print, it will use some fancy parameters from the CSS to hide everything except your card.</li>
  <li>If you wish to print multiple cards at a time, then click on the "Go To Multi-Printer" link at the top. Then, open each .json file you have previously saved.  Copy and paste the json contents into each of the areas you wish the card to appear in. You should be able to print these cards in a single, two-sided page.  However, if you do sleeve the cards, then you can simply put the two cards together.</li>
  <li>Lastly, let's sleeve your card. The output is intended to fit inside a 80mm x 120mm sleeve. You may have to do some fidgeting to get it to work unfortunately, but I know that it works in Chrome on Windows and Ubuntu. Firefox on Windows and Ubuntu has some CSS issues, but prints out okay as well.</li>
</ol>

<p>Here are some coming features of the product (in an unprioritized order):</p>

<ul>
  <li>More skills, weapons, and equipment to select from.</li>
  <li>More units to populate from.</li>
  <li>Custom theme generation.</li>
  <li>Easier management of your unit through a sharable (though complicated) string.</li>
  <li>More thorough help presented throughout the actual page.</li>
</ul>

<p>And here are some things that unfortunately are a long way off:</p>

<ul>
  <li>Backend persistence. In other words, you'll need to keep storing things by hand.</li>
  <li>Multi-language support. Truly sorry about this one, but this project is equal parts a tool intended for the community and selfish hobby development. I hope to make it localized some day, but that will take time. Shoot, I don't even know what the popular localization strategies for AngularJS are!</li>
</ul>

<a href="http://www.infinitythegame.com">Infinity</a> is &copy;2016 Corvus Belli S.L.L. Images, logos, ideas belong to them. Their content is currently used permission and may be taken down at their request. You can <a href="http://www.infinitythegame.com">visit their site here</a> for more information on Infinity.

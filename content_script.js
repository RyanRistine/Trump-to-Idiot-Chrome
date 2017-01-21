walk(document.body);

function walk(node)
{

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDonald Trump\b/g, "Babbling Idiot");
	v = v.replace(/\bDonald trump\b/g, "Babbling Idiot");
	v = v.replace(/\bdonald Trump\b/g, "Babbling Idiot");
	v = v.replace(/\bdonald trump\b/g, "Babbling Idiot");
	v = v.replace(/\bTRUMP\b/g, "Babbling Idiot");
	v = v.replace(/\bTrump\b/g, "Babbling Idiot");
	v = v.replace(/\btrump\b/g, "Babbling Idiot");
	v = v.replace(/\bThe Donald\b/g, "Babbling Idiot");
	v = v.replace(/\bDonald J Trump\b/g, "Babbling Idiot");
	v = v.replace(/\bDONALD TRUMP\b/g, "Babbling Idiot");
	v = v.replace(/\bThe_donald\b/g, "Idiot Worshippers");
	v = v.replace(/\bTHE_DONALD\b/g, "Idiot Worshippers");

	textNode.nodeValue = v;
}

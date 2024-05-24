﻿NDSummary.OnToolTipsLoaded("RustClass:StorageManager",{83:"<div class=\"NDToolTip TClass LRust\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype83\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\">pub <span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">StorageManager</div></div></div><div class=\"TTSummary\">This is the Rust side of the storage manager.&nbsp; The real work is performed in the kotlin and swift functions, but this exposes that in a platform neutral way to our rust code.</div></div>",85:"<div class=\"NDToolTip TVariable LRust\"><div class=\"TTSummary\">Callback function pointer to native (kotlin/swift) code for adding a key.</div></div>",86:"<div class=\"NDToolTip TVariable LRust\"><div class=\"TTSummary\">Callback function pointer to native (kotlin/swift) code for getting a key.</div></div>",87:"<div class=\"NDToolTip TVariable LRust\"><div class=\"TTSummary\">Callback function pointer to native (kotlin/swift) code for removing a key.&nbsp; This referenced function MUST be idempotent.&nbsp; In particular, it must treat removing a non-existent key as a normal and expected circumstance, simply returning () and not an error.</div></div>",89:"<div class=\"NDToolTip TFunction LRust\"><div id=\"NDPrototype89\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/4/2\">fn add(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">&amp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">self,</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">key</div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\">Key,</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">value</div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\">Value</div><div class=\"PAfterParameters\" data-WideGridArea=\"3/6/4/7\" data-NarrowGridArea=\"5/1/6/6\" style=\"grid-area:3/6/4/7\">) -&gt; Result&lt;(), StorageManagerError&gt;</div></div></div></div><div class=\"TTSummary\">Adds Value for Key.&nbsp; Should the key already exist, it is replaced</div></div>",90:"<div class=\"NDToolTip TFunction LRust\"><div id=\"NDPrototype90\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\">fn get(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">&amp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">self,</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">key</div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\">Key</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">) -&gt; Result&lt;Option&lt;Value&gt;, StorageManagerError&gt;</div></div></div></div><div class=\"TTSummary\">Attempts to fetch a value stored under Key from SecureStorage, Should the value not exist, None is returned</div></div>",91:"<div class=\"NDToolTip TFunction LRust\"><div id=\"NDPrototype91\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/3/2\">fn remove(</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">&amp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">self,</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">key</div><div class=\"PTypeNameSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">:&nbsp;</div><div class=\"PType InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\">Key</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/6/3/7\" data-NarrowGridArea=\"4/1/5/6\" style=\"grid-area:2/6/3/7\">) -&gt; Result&lt;(), StorageManagerError&gt;</div></div></div></div></div>"});
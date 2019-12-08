# dndmd is for beautiful Dungeons &amp; Dragons documents

Greetings adventurer, or master of dungeons. Our humble abode might not seem
like much, but hidden beneath it's rafters are wonderous things.

### Create Your Adventure

Dndmd makes the creation of authentic looking Fifth-Edition documentation easy.
It uses [Markdown](https://help.github.com/articles/markdown-basics/) so
writing new documents, publishing them to a static site, or keeping them in
source control is easy.

All of this **completely free**!

### Own Your Data

Best of all, you don't need to worry about some online service being down or
going out of business and losing your stories and designs. Because dndmd simply
creates HTML files, you can host them anywhere with ease.

>##### PDF Exporting
> Like other platforms, dndmd supports printing to PDF. If you are having
> quality/consistency issues, try using Chrome to print.
>
> * Set the **Destination** to "Save as PDF"
> * Set **Paper Size** to "A4"
> * In **Options** make sure "Background Images" is selected.

```
```

## Not quite Markdown

Dndmd uses the same Markdown flavour as
[Homebrewery](https://homebrewery.naturalcrit.com/). Because of this, there's a
few... unorthodox features to keep in mind.

___
* **Horizontal Rules** are generally used to *modify* existing elements into a
  different style. For example, a horizontal rule before a blockquote will give
  it the style of a Monster Stat Block instead of a note.
* **New Pages** are controlled by the author. It's impossible for the site to
  detect when the end of a page is reached, so indicate you'd like to start a
  new page, use the new page snippet to get the syntax.
* **Code Blocks** are used only to indicate column breaks. Since they don't
  allow for styling within them, they weren't that useful to use.
* **HTML** can be used to get *just* the right look for your content.

<img src='https://i.imgur.com/hMna6G0.png' style='position:absolute;bottom:50px;right:30px;width:280px' />

<div class='pageNumber'>1</div>

\page

### Custom Villainy

With a simple template, creating custom villainy (or heroism) is easy. Here we
see the deadly Exemplar, the evil paladin.

---
> ## Exemplar, the Evil Paladin
> *Medium humanoid, lawful evil*
> ___
> - **Armor Class** 20 (plate mail, shield)
> - **Hit Points** 180
> - **Speed** 30 ft.
> ___
> |STR|DEX|CON|INT|WIS|CHA|
> |:---:|:---:|:---:|:---:|:---:|:---:|
> |20 (+5)|14 (+2)|18 (+4)|12 (+1)|12 (+1)|20 (+5)|
>
> ___
> - **Saving Throws** Str +10, Con +9, Cha +10
> - **Skills** Athletics +15
> - **Damage Resistances** necrotic, piercing, bludgeoning, slashing
> - **Senses** darkvision  120 ft, passive Perception 11
> - **Languages** Common
> - **Challenge** 13 (10000 XP)
> ___
> ***Legendary Resistance (3/Day).*** If Exemplar fails a saving throw, he can
> choose to succeed instead.
>
> ***Spellcasting.*** Exemplar is a 5th-level spellcaster. His spellcasting
> ability is Charisma (spell save DC 16, +5 to hit with spell attacks).
>
> 1st level (4 slots): _bane, shield of faith, hellish rebuke, inflict wounds_
> 2nd level (3 slots): _darkness, magic weapon_
> 3rd level (1 slot): _aura of vitality, blinding smite_
>
> ***Corrupted Smite.*** As a bonus action, Exemplar can expend a spell slot to
> cause his melee weapon attacks to magically deal an extra 11 (2d10) necrotic
> damage to a target on a hit. This benefit lasts until the end of the turn. If
> Exemplar expends a spell slot of 2nd level of higher, the extra damage
> increases by 1d10 for each level above 1st.
>
> ### Actions
> ***Multiattack.*** Exemplar makes three attacks.
>
> ***Greatsword.*** _Melee Weapon Attack:_  +8 to hit, reach 5 ft, one target
> or two
>
> ***Shield bash.*** _Melee Weapon Attack:_ +8 to hit, reach 5 ft, one target.
> Hit: 5 (1d6 + 2) bludgeoning damage.
>
> ### Reactions
> ***Parry.*** Exemplar adds +4 to his AC against one melee attack that would
> hit it. To do so, the Exemplar must see the attacker and be wielding a melee
> weapon or shield.

```
```

---
> ### Legendary Actions
> You can take 2 legendary actions, choosing from the options below. Only one
> legendary action option can be used at a time and only at the end of another
> creature's turn. You regain spent legendary actions at the start of your
> turn.
>
> ***Counter-attack (Costs 2 Actions).*** Exemplar can perform one attack of
> opportunity on being hit with a non-ranged physical attack. This opportunity
> attack does not expend Exemplar' reaction.
>
> ***Repel.*** Exemplar uses his force of will to repel any creature attacking
> him directly. The creature must make a Strength save (DC 15) or be pushed
> away from Exemplar by 15 ft. This does not provoke attacks of opportunity.
>

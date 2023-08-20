
export default function InfoPage() {

    return (
        <>
          <h1>Istruzioni</h1>
          <h2>Introduzione:</h2>
          <p>Questa è una guida su come utilizzare il database in modo efficiente, contiene sia 
            consigli utili che informazioni essenziali per l'utilizzo. <br />
          </p>

          <h2>1. dritte</h2>
          <ol>
            <li>le query sono eseguite in linguaggio SQL.</li>
            <li>l'unica tabella nel DB si chiama "spells".</li>
            <li>non selezionare tutto (SELECT * FROM spells ...) quando esegui una query, la pagina potrebbe appesantirsi molto.</li>
            <li>se una query da errore, puoi provare a mettere i backtick (`) prima e dopo dei campi selezionati, alcuni di essi verranno
              altrimenti contati come parole chiavi SQL, come `range` e `force`.
            </li>
            <li>-1 sta spesso ad indicare NULL.</li>
            <li>la lista sottostante suggerisce la maggior parte dei campi e come usarli, ad esempio [INT] indica 
              che il tipo del parametro è un numero, [OPTIONS] indica le opzioni più ricorrenti che il campo può rappresentare 
              mentre [BOOL] indica che il parametro è 0 o 1. 
              I parametri [TEXT] non dovrebbero essere usati come condizioni nelle query in quanto sono molto
              variabili fra loro e spesso mere descrizioni.
            </li>
            <li>la lista dei campi contiene anche degli esempi dopo il carattere "-", usali per capire a cosa si riferiscono.</li>
            <li>[OPTIONS] con il carattere "^" segnalano che la lista di opzioni non è completa e potrebbero esistere altre
              condizioni composte da quelle incluse nella lista.
              Per eseguire query con questi campi è consigliato di usare (LIKE) invece che (=).
              ex: (SELECT name FROM spells WHERE duration LIKE "%minutes%" OR duration LIKE "%minute%").
            </li>
            <li>se non sei sicuro del funzionamento di un campo della tabella e la guida non ti soddisfa, puoi eseguire la query 
              (SELECT DISTINCT *campo* FROM spells), in questo modo troverai tutti i possibili valori che un campo può ricoprire.
            </li>
            <li>alcuni campi sono espressi insieme in una selezione in quanto svolgono tutti lo stesso scopo.
              sor, wiz, cleric, druid... indicano tutti il livello minimo dell'incantatore di diverse classi e quindi sono stati raggruppati.
            </li>
            <li>infine, i campi superflui sono campi che esistono nella tabella del database ma non dovrebbero essere utilizzati.
              questo database ha lo scopo di filtrare i dati per vari parametri e non di leggere l'effetto dell'incantesimo, 
              quindi questi campi non offrono alcuna utilità (descrizioni, descrizioni mitiche, ecc...).
              se vuoi leggere le descrizioni degli incantesimi che hai trovato eseguendo la query è consigliato utilizzare Golarion.
            </li>
          </ol>


          <h2>2. campi</h2>
          <ul style={{textAlign: 'left'}}>
            <li>name [TEXT] - Acid Arrow</li>
            <li>school [OPTIONS] - 
              <select>
                <option>conjuration</option>
                <option>enchantment</option>
                <option>transmutation</option>
                <option>abjuration</option>
                <option>divination</option>
                <option>necromancy</option>
                <option>universal</option>
                <option>evocation</option>
                <option>illusion</option>
                <option>see text</option>
              </select>
            </li>
            <li>subschool [OPTIONS] - 
              <select>
                <option>creation</option>
                <option>compulsion</option>
                <option>-1</option>
                <option>polymorph</option>
                <option>scrying</option>
                <option>glamer</option>
                <option>healing</option>
                <option>charm</option>
                <option>pattern</option>
                <option>summoning</option>
                <option>teleportation</option>
                <option>phantasm</option>
                <option>creation or calling</option>
                <option>figment</option>
                <option>figment, glamer</option>
                <option>calling</option>
                <option>shadow</option>
                <option>light</option>
                <option>creation, teleportation</option>
                <option>haunted</option>
              </select>
            </li>
            <li>descriptor [TEXT] - language-dependent, mind-affecting, sonic</li>
            <li>spell_level [TEXT] - sorcerer/wizard 2, magus 2, bloodrager 2</li>
            <li>SLA_Level [INT] - 2</li>
            <li>casting_time [OPTIONS^] - 
              <select>
                <option>1 immediate action</option>
                <option>1 swift action</option>
                <option>1 standard action</option>
                <option>... round/rounds</option>
                <option>... minute/minutes</option>
                <option>... hour/hours</option>
                <option>1 day/week</option>
              </select>
            </li>
            <li>components [TEXT] - V, S, M (rhubarb leaf and an adder's stomach), F (a dart)</li>
            <li>costly_components [INT] - 0</li>
            <li>`range` [OPTIONS^] - 
              <select>
                <option>personal</option>
                <option>touch</option>
                <option>close ...</option>
                <option>medium ...</option>
                <option>long ...</option>
                <option>... ft./feet</option>
                <option>... mile/miles</option>
                <option>1 hex</option>
                <option>unlimited</option>
                <option>-1</option>
              </select>
            </li>
            <li>area [TEXT] - 20-ft.-radius emanation centered on a point in space</li>
            <li>effect [TEXT] - one arrow of acid</li>
            <li>targets [TEXT] - living creature touched</li>
            <li>duration [OPTIONS^] - 
              <select>
                <option>instantaneous</option>
                <option>1 round/level</option>
                <option>... minutes/level</option>
                <option>... hour/level</option>
                <option>1 day/level</option>
                <option>permanent</option>
                <option>see text</option>
                <option>concentration</option>
                <option>-1</option>
              </select>
            </li>
            <li>dismissible [BOOL] - 0</li>
            <li>shapeable [BOOL] - 0</li>
            <li>saving_throw [OPTIONS^] - 
              <select>
                <option>none</option>
                <option>none or ...</option>
                <option>Will/Fortitude/Reflex half</option>
                <option>Will/Fortitude/Reflex negates</option>
                <option>Will/Fortitude negates (harmless)</option>
                <option>Will disbelief</option>
                <option>Will/Fortitude/Reflex negates/half/disbelief or ...</option>
                <option>see text/below</option>
                <option>-1</option>
              </select>
            </li>
            <li>spell_resistance [OPTIONS^] - 
              <select>
                <option>no</option>
                <option>yes</option>
                <option>yes/no (harmless)</option>
                <option>yes/no (object)</option>
                <option>yes/no; see text</option>
                <option>no (object) and yes (see text)</option>
                <option>none</option>
                <option>see text</option>
                <option>-1</option>
              </select>
            </li>
            <li>source [OPTIONS] - 
              <select>
                <option>PFRPG Core</option>
                <option>Ultimate Magic</option>
                <option>Cheliax Empire Of Devils</option>
                <option>AP 29</option>
                <option>Dwarves of Golarion</option>
                <option>AP 30</option>
                <option>Classic Treasures</option>
                <option>Gnomes Of Golarion</option>
                <option>Faction Guide</option>
                <option>Sargava</option>
                <option>AP 35</option>
                <option>Orcs of Golarion</option>
                <option>APG</option>
                <option>AP 42</option>
                <option>Inner Sea World Guide</option>
                <option>Faiths Of Purity</option>
                <option>Rival Guide</option>
                <option>Paizo Blog</option>
                <option>Humans Of Golarion</option>
                <option>Dungeons Of Golarion</option>
                <option>Pathfinder Society Field Guide</option>
                <option>Goblins Of Golarion</option>
                <option>Inner Sea Magic</option>
                <option>Ultimate Combat</option>
                <option>AP 50</option>
                <option>Faiths Of Corruption</option>
                <option>Horsemen Of The Apocalypse</option>
                <option>Dragon Empires Primer</option>
                <option>Pirates Of The Inner Sea</option>
                <option>AP 55</option>
                <option>AP 56</option>
                <option>Lost Kingdoms</option>
                <option>Advanced Race Guide</option>
                <option>RotRL-AE-Appendix</option>
                <option>AP 62</option>
                <option>Knights Of The Inner Sea</option>
                <option>AP 64</option>
                <option>AP 65</option>
                <option>Blood Of The Night</option>
                <option>People Of The North</option>
                <option>AP 67</option>
                <option>Animal Archive</option>
                <option>AP 68</option>
                <option>Dungeoneers Handbook</option>
                <option>Condition Cards</option>
                <option>AP 69</option>
                <option>Champions Of Purity</option>
                <option>Chronicle Of The Righteous</option>
                <option>AP 71</option>
                <option>Kobolds Of Golarion</option>
                <option>Quests and Campaigns</option>
                <option>Dragonslayer's Handbook</option>
                <option>Pathfinder Society Primer</option>
                <option>The Dragon's Demand</option>
                <option>Faiths & Philosophies</option>
                <option>Demon Hunter's Handbook</option>
                <option>Demons Revisited</option>
                <option>Mythic Adventures</option>
                <option>AP 74</option>
                <option>Mythic Origins</option>
                <option>Blood Of The Moon</option>
                <option>Magical Marketplace</option>
                <option>AP 77</option>
                <option>Osirion, Legacy Of Pharaohs</option>
                <option>People Of The Sands</option>
                <option>AP 78</option>
                <option>Champions Of Balance</option>
                <option>PFS S3-09</option>
                <option>AP 80</option>
                <option>Undead Slayer's Handbook</option>
                <option>Inner Sea Gods</option>
                <option>AP 81</option>
                <option>Occult Mysteries</option>
                <option>The HarrowHandbook</option>
                <option>AP 82</option>
                <option>Blood Of The Elements</option>
                <option>AP 84</option>
                <option>People Of The River</option>
                <option>Technology Guide</option>
                <option>People Of The Stars</option>
                <option>Advanced Class Guide</option>
                <option>AP 86</option>
                <option>Champions Of Corruption</option>
                <option>Advanced Class Origins</option>
                <option>Monster Codex</option>
                <option>Ranged Tactics Toolbox</option>
                <option>AP 89</option>
                <option>Giant Hunters Handbook</option>
                <option>Familiar Folio</option>
                <option>AP 91</option>
                <option>Melee Tactics Toolbox</option>
                <option>Heroes Of The Wild</option>
                <option>AP 93</option>
                <option>Cohorts & Companions</option>
                <option>Monster Summoner's Handbook</option>
                <option>Inner Sea Monster Codex</option>
                <option>AP 95</option>
                <option>Occult Adventures</option>
                <option>Dirty Tactics Toolbox</option>
                <option>Heroes Of The Streets</option>
                <option>Inner Sea Races</option>
                <option>Occult Origins</option>
                <option>Black Markets</option>
                <option>Occult Realms</option>
                <option>Agents Of Evil</option>
                <option>AP 102</option>
                <option>Arcane Anthology</option>
                <option>Blood Of Shadows</option>
                <option>Ultimate Intrigue</option>
                <option>Armor Masters Handbook</option>
                <option>Magic Tactics Toolbox</option>
                <option>Inner Sea Intrigue</option>
                <option>AP 107</option>
                <option>Spymaster's Handbook</option>
                <option>Legacy Of Dragons</option>
                <option>Horror Adventures</option>
                <option>Haunted Heroes Handbook</option>
                <option>AP 110</option>
                <option>Planes Of Power</option>
                <option>Divine Anthology</option>
                <option>Inner Sea Temples</option>
                <option>Curse Of The Crimson Throne Chapter Appendix</option>
                <option>Blood Of The Beast</option>
                <option>Villain Codex</option>
                <option>Paths Of The Righteous</option>
                <option>The First World Realm Of The Fey</option>
                <option>Seekers of Secrets</option>
                <option>AP 113</option>
                <option>Qadira Jewel Of The East</option>
                <option>Healer's Handbook</option>
                <option>Heroes Of The High Court</option>
                <option>Psychic Anthology</option>
                <option>AP 115</option>
                <option>AP 116</option>
                <option>Monster Hunter's Handbook</option>
                <option>AP 117</option>
                <option>Heroes Of The Darklands</option>
                <option>Legacy Of The First World</option>
                <option>Adventurer's Guide</option>
                <option>AP 119</option>
                <option>Adventurer's Armory 2</option>
                <option>Aquatic Adventures</option>
                <option>Ultimate Wilderness</option>
                <option>AP 131</option>
                <option>AP 134</option>
                <option>AP 135</option>
                <option>Book of the Damned</option>
                <option>Planar Adventures</option>
                <option>AP 140</option>
                <option>Rappan Athuk</option>
                <option>Sword of Air</option>
                <option>AP 143</option>
                <option>Plane-Hopper's Handbook</option>
                <option>Distant Realms</option>
              </select>
            </li>
            <li>
              <select>
                <option>verbal</option>
                <option>somatic</option>
                <option>material</option>
                <option>focus</option>
                <option>divine_focus</option>
              </select> [BOOL] - 1
            </li>
            <li>material_costs [INT] - 50</li>
            <li>
              <select>
                <option>sor</option>
                <option>wiz</option>
                <option>cleric</option>
                <option>druid</option>
                <option>ranger</option>
                <option>bard</option>
                <option>paladin</option>
                <option>alchemist</option>
                <option>summoner</option>
                <option>witch</option>
                <option>inquisitor</option>
                <option>oracle</option>
                <option>antipaladin</option>
                <option>magus</option>
                <option>adept</option>
                <option>bloodrager</option>
                <option>shaman</option>
                <option>psychic</option>
                <option>medium</option>
                <option>mesmerist</option>
                <option>occultist</option>
                <option>spiritualist</option>
                <option>skald</option>
                <option>investigator</option>
                <option>hunter</option>
                <option>summoner_unchained</option>
              </select> [INT] - -1/0/1/3/...
            </li>
            <li>deity [TEXT] - Asmodeus</li>
            <li>domain [TEXT] - Luck (2), Tactics (2)</li>
            <li>
              <select>
                <option>acid</option>
                <option>air</option>
                <option>chaotic</option>
                <option>cold</option>
                <option>curse</option>
                <option>darkness</option>
                <option>death</option>
                <option>disease</option>
                <option>earth</option>
                <option>electricity</option>
                <option>emotion</option>
                <option>evil</option>
                <option>fear</option>
                <option>fire</option>
                <option>force</option>
                <option>good</option>
                <option>language_dependent</option>
                <option>lawful</option>
                <option>light</option>
                <option>mind_affecting</option>
                <option>pain</option>
                <option>poison</option>
                <option>shadow</option>
                <option>sonic</option>
                <option>water</option>
              </select> [BOOL] - 1
            </li>
            <li>bloodline [TEXT] - Kobold Sorcerer (15), Orc (15), Kobold (15)</li>
            <li>patron [TEXT] - Agility (14), Boundaries (14), Spirits (14), Ethereal (12)</li>
            <li>augmented [BOOL] - 0</li>
            <li>mythic [BOOL] - 1</li>

            <li>haunt_statistics [TEXT] - Notice Perception DC 30 (to detect the smell of brine) hp 5 hp/level; Trigger proximity; Reset none</li>
            <li>
              <select>
                <option>ruse</option>
                <option>draconic</option>
                <option>meditative</option>
              </select> [BOOL] - 1
            </li>
          </ul>

          <h2>3. campi superflui</h2>
          <ul>
            <li>description</li>
            <li>description_formatted</li>
            <li>full_text</li>
            <li>mythic_text</li>
            <li>short_description</li>
            <li>linktext</li>
            <li>id</li>
          </ul>
        </>
    )
}
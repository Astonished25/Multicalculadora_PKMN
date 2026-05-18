const OBJT = {
    'Bright Powder': ['Reduce la precisión del rival en un 10%.'],
    'Focus Band': ['Tiene un 10% de probabilidad de evitar el debilitamiento dejando 1 PS.'],
    "King's Rock": ['Otorga un 10% de probabilidad de amedrentar al rival al infligir daño.'],
    'Leftovers': ['Recupera 1/16 de los PS máximos al final de cada turno.'],
    'Quick Claw': ['Tiene un 20% de probabilidad de permitir actuar primero dentro de la misma prioridad.'],
    'Scope Lens': ['Aumenta el ratio de golpes críticos en 1 nivel.'],
    'Light Ball': ['Duplica el Ataque y el Ataque Especial de Pikachu.'],
    'Lucky Punch': ['Aumenta el ratio de golpes críticos de Chansey en 2 niveles.'],
    'Metal Powder': ['Duplica la Defensa física de Ditto antes de transformarse.'],
    'Thick Club': ['Duplica el Ataque físico de Cubone, Marowak y Marowak Alola.'],
    'Black Belt': ['Potencia los movimientos de tipo Lucha en un 20%.'],
    'Black Glasses': ['Potencia los movimientos de tipo Siniestro en un 20%.'],
    'Charcoal': ['Potencia los movimientos de tipo Fuego en un 20%.'],
    'Dragon Fang': ['Potencia los movimientos de tipo Dragón en un 20%.'],
    'Hard Stone': ['Potencia los movimientos de tipo Roca en un 20%.'],
    'Magnet': ['Potencia los movimientos de tipo Eléctrico en un 20%.'],
    'Metal Coat': ['Potencia los movimientos de tipo Acero en un 20%.'],
    'Miracle Seed': ['Potencia los movimientos de tipo Planta en un 20%.'],
    'Mystic Water': ['Potencia los movimientos de tipo Agua en un 20%.'],
    'Never-Melt Ice': ['Potencia los movimientos de tipo Hielo en un 20%.'],
    'Pink Bow': ['Potencia los movimientos de tipo Normal en un 20% (Clásico).'],
    'Poison Barb': ['Potencia los movimientos de tipo Veneno en un 20%.'],
    'Polkadot Bow': ['Potencia los movimientos de tipo Normal en un 20%.'],
    'Sharp Beak': ['Potencia los movimientos de tipo Volador en un 20%.'],
    'Silver Powder': ['Potencia los movimientos de tipo Bicho en un 20%.'],
    'Soft Sand': ['Potencia los movimientos de tipo Tierra en un 20%.'],
    'Spell Tag': ['Potencia los movimientos de tipo Fantasma en un 20%.'],
    'Twisted Spoon': ['Potencia los movimientos de tipo Psíquico en un 20%.'],
    'Cheri Berry': ['Cura la parálisis de forma inmediata (se consume).'],
    'Chesto Berry': ['Cura el sueño de forma inmediata (se consume).'],
    'Pecha Berry': ['Cura el envenenamiento de forma inmediata (se consume).'],
    'Rawst Berry': ['Cura las quemaduras de forma inmediata (se consume).'],
    'Aspear Berry': ['Cura el congelamiento de forma inmediata (se consume).'],
    'Leppa Berry': ['Restaura 10 PP de un movimiento cuyos PP se hayan agotado.'],
    'Oran Berry': ['Restaura 10 PS fijos cuando la salud del portador baja del 50%.'],
    'Persim Berry': ['Cura la confusión de forma inmediata (se consume).'],
    'Lum Berry': ['Cura cualquier problema de estado o confusión de forma inmediata.'],
    'Sitrus Berry': ['Restaura el 25% de los PS máximos cuando la salud baja del 50%.'],
    'Figy Berry': ['Restaura PS en apuros; confunde a Pokémon de naturaleza desfavorable a Ataque.'],
    'Wiki Berry': ['Restaura PS en apuros; confunde a Pokémon de naturaleza desfavorable a Velocidad.'],
    'Mago Berry': ['Restaura PS en apuros; confunde a Pokémon de naturaleza desfavorable a Def. Especial.'],
    'Aguav Berry': ['Restaura PS en apuros; confunde a Pokémon de naturaleza desfavorable a Atk. Especial.'],
    'Iapapa Berry': ['Restaura PS en apuros; confunde a Pokémon de naturaleza desfavorable a Defensa.'],
    'Razz Berry': ['Baya básica utilizada para fabricar Pokochos o Pokéblocks.'],
    'Bluk Berry': ['Baya básica utilizada para fabricar Pokochos o Pokéblocks.'],
    'Nanab Berry': ['Baya básica utilizada para fabricar Pokochos o Pokéblocks.'],
    'Wepear Berry': ['Baya básica utilizada para fabricar Pokochos o Pokéblocks.'],
    'Pinap Berry': ['Baya básica utilizada para fabricar Pokochos o Pokéblocks.'],
    'Pomeg Berry': ['Reduce los EVs de HP del portador a cambio de subir su amistad.'],
    'Kelpsy Berry': ['Reduce los EVs de Ataque del portador a cambio de subir su amistad.'],
    'Qualot Berry': ['Reduce los EVs de Defensa del portador a cambio de subir su amistad.'],
    'Hondew Berry': ['Reduce los EVs de Atk. Especial del portador a cambio de subir su amistad.'],
    'Grepa Berry': ['Reduce los EVs de Def. Especial del portador a cambio de subir su amistad.'],
    'Tamato Berry': ['Reduce los EVs de Velocidad del portador a cambio de subir su amistad.'],
    'Cornn Berry': ['Baya de alta calidad para repostería Pokémon.'],
    'Magost Berry': ['Baya de alta calidad para repostería Pokémon.'],
    'Rabuta Berry': ['Baya de alta calidad para repostería Pokémon.'],
    'Nomel Berry': ['Baya de alta calidad para repostería Pokémon.'],
    'Spelon Berry': ['Baya de alta calidad para repostería Pokémon.'],
    'Pamtre Berry': ['Baya rara utilizada para maximizar la belleza en concursos.'],
    'Watmel Berry': ['Baya pesada de alta calidad para repostería.'],
    'Durin Berry': ['Baya amarga de alta calidad para repostería.'],
    'Belue Berry': ['Baya brillante de alta calidad para repostería.'],
    'Liechi Berry': ['Aumenta el Ataque físico en 1 nivel cuando los PS bajan del 25%.'],
    'Ganlon Berry': ['Aumenta la Defensa física en 1 nivel cuando los PS bajan del 25%.'],
    'Salac Berry': ['Aumenta la Velocidad en 1 nivel cuando los PS bajan del 25%.'],
    'Petaya Berry': ['Aumenta el Ataque Especial en 1 nivel cuando los PS bajan del 25%.'],
    'Apicot Berry': ['Aumenta la Defensa Especial en 1 nivel cuando los PS bajan del 25%.'],
    'Lansat Berry': ['Aumenta drásticamente el ratio de golpes críticos en apuros.'],
    'Starf Berry': ['Aumenta una estadística al azar en 2 niveles en apuros.'],
    'Enigma Berry': ['Restaura un 25% de los PS máximos al recibir un ataque supereficaz.'],
    'White Herb': ['Restaura instantáneamente cualquier estadística disminuida por el rival.'],
    'Macho Brace': ['Duplica los EVs ganados pero reduce la Velocidad del usuario a la mitad en combate.'],
    'Mental Herb': ['Cura efectos de mofa, atracción, otra vez, tormento, anticura y constricción.'],
    'Choice Band': ['Aumenta el Ataque físico en un 50% pero solo permite usar el primer movimiento elegido.'],
    'Soul Dew': ['Potencia los movimientos Psíquico y Dragón de Latios y Latias en un 20%.'],
    'Deep Sea Tooth': ['Duplica el Ataque Especial de Clamperl en combate.'],
    'Deep Sea Scale': ['Duplica la Defensa Especial de Clamperl en combate.'],
    'Silk Scarf': ['Potencia los movimientos de tipo Normal en un 20%.'],
    'Shell Bell': ['El portador recupera PS equivalentes al 1/8 del daño infligido al rival.'],
    'Sea Incense': ['Potencia los movimientos de tipo Agua en un 20%.'],
    'Lax Incense': ['Disminuye la precisión de los movimientos dirigidos al portador en un 5%.'],
    'Griseous Orb': ['Potencia movimientos Fantasma/Dragón de Giratina en 20% y activa su Forma Origen.'],
    'Adamant Orb': ['Potencia los movimientos de tipo Acero y Dragón de Dialga en un 20%.'],
    'Lustrous Orb': ['Potencia los movimientos de tipo Agua y Dragón de Palkia en un 20%.'],
    'Occa Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Fuego.'],
    'Passho Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Agua.'],
    'Wacan Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Eléctrico.'],
    'Rindo Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Planta.'],
    'Yache Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Hielo.'],
    'Chople Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Lucha.'],
    'Kebia Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Veneno.'],
    'Shuca Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Tierra.'],
    'Coba Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Volador.'],
    'Payapa Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Psíquico.'],
    'Tanga Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Bicho.'],
    'Charti Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Roca.'],
    'Kasib Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Fantasma.'],
    'Haban Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Dragón.'],
    'Colbur Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Siniestro.'],
    'Babiri Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Acero.'],
    'Chilan Berry': ['Reduce a la mitad el daño recibido de un ataque de tipo Normal.'],
    'Micle Berry': ['Aumenta la precisión del siguiente movimiento en apuros (se consume).'],
    'Custap Berry': ['Permite atacar primero en su prioridad de acción por una sola vez en apuros.'],
    'Jaboca Berry': ['Si el portador recibe un golpe físico, el atacante pierde 1/8 de sus PS máximos.'],
    'Rowap Berry': ['Si el portador recibe un golpe especial, el atacante pierde 1/8 de sus PS máximos.'],
    'Wide Lens': ['Aumenta la precisión de los movimientos del portador en un 10%.'],
    'Muscle Band': ['Potencia los movimientos de categoría física en un 10%.'],
    'Wise Glasses': ['Potencia los movimientos de categoría especial en un 10%.'],
    'Expert Belt': ['Potencia los ataques supereficaces dirigidos al rival en un 20%.'],
    'Light Clay': ['Extiende la duración de Reflejo y Pantalla de Luz de 5 a 8 turnos.'],
    'Life Orb': ['Potencia los movimientos un 30% a costa de perder un 10% de PS máximos por ataque.'],
    'Power Herb': ['Permite ejecutar movimientos de carga (ej: Rayo Solar) en el primer turno.'],
    'Toxic Orb': ['Envenena gravemente al portador al finalizar el primer turno en combate.'],
    'Flame Orb': ['Quema al portador al finalizar el primer turno en combate.'],
    'Quick Powder': ['Duplica la Velocidad de Ditto antes de que este se transforme.'],
    'Focus Sash': ['Si tiene los PS al máximo, evita caer debilitado ante un golpe fulminante dejando 1 PS.'],
    'Zoom Lens': ['Aumenta la precisión en un 20% si el usuario actúa después de su objetivo.'],
    'Metronome': ['Potencia un movimiento un 20% extra acumulativo por cada uso consecutivo (máx 100%).'],
    'Iron Ball': ['Reduce la Velocidad un 50% y quita las inmunidades al tipo Tierra a voladores y levitadores.'],
    'Lagging Tail': ['Obliga al portador a atacar al final de su respectiva prioridad de movimiento.'],
    'Destiny Knot': ['Si el portador se enamora, el rival también se enamora. Pasa 5 IVs en crianza.'],
    'Black Sludge': ['Cura 1/16 de PS por turno a tipos Veneno; daña a cualquier otro tipo.'],
    'Icy Rock': ['Extiende la duración del Granizo provocado por el portador de 5 a 8 turnos.'],
    'Smooth Rock': ['Extiende la duración de la Tormenta de Arena provocada por el usuario de 5 a 8 turnos.'],
    'Heat Rock': ['Extiende la duración del Día Soleado provocado por el portador de 5 a 8 turnos.'],
    'Damp Rock': ['Extiende la duración de la Danza Lluvia provocada por el portador de 5 a 8 turnos.'],
    'Grip Claw': ['Fija la duración de movimientos de trampa (ej: Constricción) en 7 turnos fijos.'],
    'Choice Scarf': ['Aumenta la Velocidad en un 50% pero restringe el uso a un único movimiento.'],
    'Sticky Barb': ['Resta 1/8 de PS por turno; se pasa al rival si este ataca con un golpe de contacto.'],
    'Power Bracer': ['Suma +8 EVs en Ataque pero reduce la Velocidad a la mitad en combate.'],
    'Power Belt': ['Suma +8 EVs en Defensa pero reduce la Velocidad a la mitad en combate.'],
    'Power Lens': ['Suma +8 EVs en Atk. Especial pero reduce la Velocidad a la mitad en combate.'],
    'Power Band': ['Suma +8 EVs en Def. Especial pero reduce la Velocidad a la mitad en combate.'],
    'Power Anklet': ['Suma +8 EVs en Velocidad pero reduce la Velocidad a la mitad en combate.'],
    'Power Weight': ['Suma +8 EVs en PS máximos pero reduce la Velocidad a la mitad en combate.'],
    'Shed Shell': ['Permite al portador ser relevado del combate ignorando cualquier habilidad de trampa.'],
    'Big Root': ['Aumenta en un 30% los PS recuperados mediante ataques de drenaje.'],
    'Choice Specs': ['Aumenta el Ataque Especial en un 50% pero restringe el uso a un único movimiento.'],
    'Flame Plate': ['Potencia movimientos de tipo Fuego un 20% y cambia a Arceus a tipo Fuego.'],
    'Splash Plate': ['Potencia movimientos de tipo Agua un 20% y cambia a Arceus a tipo Agua.'],
    'Zap Plate': ['Potencia movimientos de tipo Eléctrico un 20% y cambia a Arceus a tipo Eléctrico.'],
    'Meadow Plate': ['Potencia movimientos de tipo Planta un 20% y cambia a Arceus a tipo Planta.'],
    'Icicle Plate': ['Potencia movimientos de tipo Hielo un 20% y cambia a Arceus a tipo Hielo.'],
    'Fist Plate': ['Potencia movimientos de tipo Lucha un 20% y cambia a Arceus a tipo Lucha.'],
    'Toxic Plate': ['Potencia movimientos de tipo Veneno un 20% y cambia a Arceus a tipo Veneno.'],
    'Earth Plate': ['Potencia movimientos de tipo Tierra un 20% y cambia a Arceus a tipo Tierra.'],
    'Sky Plate': ['Potencia movimientos de tipo Volador un 20% y cambia a Arceus a tipo Volador.'],
    'Mind Plate': ['Potencia movimientos de tipo Psíquico un 20% y cambia a Arceus a tipo Psíquico.'],
    'Insect Plate': ['Potencia movimientos de tipo Bicho un 20% y cambia a Arceus a tipo Bicho.'],
    'Stone Plate': ['Potencia movimientos de tipo Roca un 20% y cambia a Arceus a tipo Roca.'],
    'Spooky Plate': ['Potencia movimientos de tipo Fantasma un 20% y cambia a Arceus a tipo Fantasma.'],
    'Draco Plate': ['Potencia movimientos de tipo Dragón un 20% y cambia a Arceus a tipo Dragón.'],
    'Dread Plate': ['Potencia movimientos de tipo Siniestro un 20% y cambia a Arceus a tipo Siniestro.'],
    'Iron Plate': ['Potencia movimientos de tipo Acero un 20% y cambia a Arceus a tipo Acero.'],
    'Odd Incense': ['Potencia los movimientos de tipo Psíquico en un 20%.'],
    'Rock Incense': ['Potencia los movimientos de tipo Roca en un 20%.'],
    'Full Incense': ['Obliga al portador a moverse en el último lugar dentro de su misma prioridad.'],
    'Wave Incense': ['Potencia los movimientos de tipo Agua en un 20%.'],
    'Rose Incense': ['Potencia los movimientos de tipo Planta en un 20%.'],
    'Luck Incense': ['Duplica el dinero ganado en combates si el portador entra a la batalla.'],
    'Pure Incense': ['Reduce la probabilidad de encontrarse con Pokémon salvajes en el mapa.'],
    'Razor Claw': ['Aumenta el ratio de críticos en 1 nivel. Evoluciona a Sneasel de noche.'],
    'Razor Fang': ['Otorga un 10% de probabilidad de amedrentar. Evoluciona a Gligar de noche.'],
    'Fire Gem': ['Potencia un único ataque de tipo Fuego en un 30% y luego se consume.'],
    'Water Gem': ['Potencia un único ataque de tipo Agua en un 30% y luego se consume.'],
    'Electric Gem': ['Potencia un único ataque de tipo Eléctrico en un 30% y luego se consume.'],
    'Grass Gem': ['Potencia un único ataque de tipo Planta en un 30% y luego se consume.'],
    'Ice Gem': ['Potencia un único ataque de tipo Hielo en un 30% y luego se consume.'],
    'Fighting Gem': ['Potencia un único ataque de tipo Lucha en un 30% y luego se consume.'],
    'Poison Gem': ['Potencia un único ataque de tipo Veneno en un 30% y luego se consume.'],
    'Ground Gem': ['Potencia un único ataque de tipo Tierra en un 30% y luego se consume.'],
    'Flying Gem': ['Potencia un único ataque de tipo Volador en un 30% y luego se consume.'],
    'Psychic Gem': ['Potencia un único ataque de tipo Psíquico en un 30% y luego se consume.'],
    'Bug Gem': ['Potencia un único ataque de tipo Bicho en un 30% y luego se consume.'],
    'Rock Gem': ['Potencia un único ataque de tipo Roca en un 30% y luego se consume.'],
    'Ghost Gem': ['Potencia un único ataque de tipo Fantasma en un 30% y luego se consume.'],
    'Dragon Gem': ['Potencia un único ataque de tipo Dragón en un 30% y luego se consume.'],
    'Dark Gem': ['Potencia un único ataque de tipo Siniestro en un 30% y luego se consume.'],
    'Steel Gem': ['Potencia un único ataque de tipo Acero en un 30% y luego se consume.'],
    'Eviolite': ['Aumenta la Defensa y Defensa Especial en un 50% si el Pokémon puede evolucionar.'],
    'Float Stone': ['Reduce el peso total del Pokémon portador a la mitad.'],
    'Rocky Helmet': ['Si el usuario recibe un golpe de contacto, el atacante pierde 1/6 de sus PS máximos.'],
    'Air Balloon': ['Otorga inmunidad al tipo Tierra; se revienta si el portador sufre daño directo.'],
    'Red Card': ['Si el portador es golpeado, obliga al agresor a ser cambiado por un aliado al azar.'],
    'Ring Target': ['Hace que el portador pierda todas sus inmunidades elementales de tipo por completo.'],
    'Binding Band': ['Aumenta el daño residual por turno causado por movimientos de trampa.'],
    'Absorb Bulb': ['Aumenta el Ataque Especial en 1 nivel al recibir un golpe de tipo Agua (se consume).'],
    'Cell Battery': ['Aumenta el Ataque físico en 1 nivel al recibir un golpe de tipo Eléctrico (se consume).'],
    'Eject Button': ['Intercambia de inmediato al portador por un compañero tras recibir daño (se consume).'],
    'Normal Gem': ['Potencia un único ataque de tipo Normal en un 30% y luego se consume.'],
    'Big Nugget': ['Objeto de alto valor de venta en tiendas (Gran potencia base al usar Lanzamiento).'],
    'Burn Drive': ['Cambia el tipo de Tecno Shock de Genesect a Fuego.'],
    'Chill Drive': ['Cambia el tipo de Tecno Shock de Genesect a Hielo.'],
    'Douse Drive': ['Cambia el tipo de Tecno Shock de Genesect a Agua.'],
    'Shock Drive': ['Cambia el tipo de Tecno Shock de Genesect a Eléctrico.'],
    'Weakness Policy': ['Aumenta el Ataque y Atk. Especial en 2 niveles al recibir un golpe supereficaz.'],
    'Assault Vest': ['Aumenta la Defensa Especial en un 50% pero impide seleccionar movimientos de estado.'],
    'Pixie Plate': ['Potencia movimientos de tipo Hada un 20% y cambia a Arceus a tipo Hada.'],
    'Luminous Moss': ['Aumenta la Defensa Especial en 1 nivel al recibir un golpe de tipo Agua (se consume).'],
    'Snowball': ['Aumenta el Ataque físico en 1 nivel al recibir un golpe de tipo Hielo (se consume).'],
    'Safety Goggles': ['Inmuniza contra el daño de climas y movimientos basados en polvos y esporas.'],
    'Roseli Berry': ['Reduce a la mitad el daño recibido de un ataque supereficaz de tipo Hada.'],
    'Kee Berry': ['Aumenta la Defensa física en 1 nivel al recibir un ataque físico (se consume).'],
    'Maranga Berry': ['Aumenta la Defensa Especial en 1 nivel al recibir un ataque especial (se consume).'],
    'Normalium Z': ['Permite transformar los movimientos de tipo Normal en su respectivo Movimiento Z.'],
    'Firium Z': ['Permite transformar los movimientos de tipo Fuego en su respectivo Movimiento Z.'],
    'Waterium Z': ['Permite transformar los movimientos de tipo Agua en su respectivo Movimiento Z.'],
    'Electrium Z': ['Permite transformar los movimientos de tipo Eléctrico en su respectivo Movimiento Z.'],
    'Grassium Z': ['Permite transformar los movimientos de tipo Planta en su respectivo Movimiento Z.'],
    'Icium Z': ['Permite transformar los movimientos de tipo Hielo en su respectivo Movimiento Z.'],
    'Fightinium Z': ['Permite transformar los movimientos de tipo Lucha en su respectivo Movimiento Z.'],
    'Poisonium Z': ['Permite transformar los movimientos de tipo Veneno en su respectivo Movimiento Z.'],
    'Groundium Z': ['Permite transformar los movimientos de tipo Tierra en su respectivo Movimiento Z.'],
    'Flyinium Z': ['Permite transformar los movimientos de tipo Volador en su respectivo Movimiento Z.'],
    'Psychium Z': ['Permite transformar los movimientos de tipo Psíquico en su respectivo Movimiento Z.'],
    'Buginium Z': ['Permite transformar los movimientos de tipo Bicho en su respectivo Movimiento Z.'],
    'Rockium Z': ['Permite transformar los movimientos de tipo Roca en su respectivo Movimiento Z.'],
    'Ghostium Z': ['Permite transformar los movimientos de tipo Fantasma en su respectivo Movimiento Z.'],
    'Dragonium Z': ['Permite transformar los movimientos de tipo Dragón en su respectivo Movimiento Z.'],
    'Darkinium Z': ['Permite transformar los movimientos de tipo Siniestro en su respectivo Movimiento Z.'],
    'Steelium Z': ['Permite transformar los movimientos de tipo Acero en su respectivo Movimiento Z.'],
    'Fairium Z': ['Permite transformar los movimientos de tipo Hada en su respectivo Movimiento Z.'],
    'Pikanium Z': ['Cristal Z exclusivo que transforma el movimiento Voltiocambio de Pikachu.'],
    'Decidium Z': ['Cristal Z exclusivo que transforma el movimiento Puntada Sombría de Decidueye.'],
    'Incinium Z': ['Cristal Z exclusivo que transforma el movimiento Lariat Oscuro de Incineroar.'],
    'Primarium Z': ['Cristal Z exclusivo que transforma el movimiento Aria Burbuja de Primarina.'],
    'Tapunium Z': ['Cristal Z exclusivo de los espíritus guardianes Tapu para ejecutar Cólera de Alola.'],
    'Marshadium Z': ['Cristal Z exclusivo que transforma el movimiento Robasombra de Marshadow.'],
    'Aloraichium Z': ['Cristal Z exclusivo que transforma el movimiento Psíquico de Raichu Alola.'],
    'Snorlium Z': ['Cristal Z exclusivo que transforma el movimiento Giga Impacto de Snorlax.'],
    'Eevium Z': ['Cristal Z exclusivo que transforma el movimiento Última Baza de Eevee.'],
    'Mewnium Z': ['Cristal Z exclusivo que transforma el movimiento Psíquico de Mew.'],
    'Pikashunium Z': ['Cristal Z exclusivo de Pikachu con gorra para desatar el Gigavoltio Piloto.'],
    'Solganium Z': ['Cristal Z exclusivo que transforma el movimiento Envite Meteórico de Solgaleo.'],
    'Lunalium Z': ['Cristal Z exclusivo que transforma el movimiento Rayo Umbrío de Lunala.'],
    'Ultranecrozium Z': ['Cristal Z exclusivo que permite a Necrozma desatar su Ultraexplosión.'],
    'Mimikium Z': ['Cristal Z exclusivo que transforma el movimiento Carantoña de Mimikyu.'],
    'Lycanium Z': ['Cristal Z exclusivo que transforma el movimiento Roca Afilada de Lycanroc.'],
    'Kommonium Z': ['Cristal Z exclusivo que transforma el movimiento Fragor Escamas de Kommo-o.'],
    'Adrenaline Orb': ['Aumenta la Velocidad del usuario en 1 nivel al sufrir Intimidación (se consume).'],
    'Terrain Extender': ['Extiende la duración de los campos elementales activos de 5 a 8 turnos fijos.'],
    'Protective Pads': ['Protege al portador de los efectos perjudiciales al realizar ataques de contacto.'],
    'Electric Seed': ['Aumenta la Defensa física en 1 nivel de forma automática en Campo Eléctrico.'],
    'Psychic Seed': ['Aumenta la Defensa Especial en 1 nivel de forma automática en Campo Psíquico.'],
    'Misty Seed': ['Aumenta la Defensa Especial en 1 nivel de forma automática en Campo de Niebla.'],
    'Grassy Seed': ['Aumenta la Defensa física en 1 nivel de forma automática en Campo de Hierba.'],
    'Fighting Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Lucha.'],
    'Flying Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Volador.'],
    'Poison Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Veneno.'],
    'Ground Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Tierra.'],
    'Rock Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Roca.'],
    'Bug Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Bicho.'],
    'Ghost Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Fantasma.'],
    'Steel Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Acero.'],
    'Fire Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Fuego.'],
    'Water Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Agua.'],
    'Grass Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Planta.'],
    'Electric Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Eléctrico.'],
    'Psychic Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Psíquico.'],
    'Ice Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Hielo.'],
    'Dragon Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Dragón.'],
    'Dark Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Siniestro.'],
    'Fairy Memory': ['Cambia el tipo de Silvally y de su movimiento Multiataque a tipo Hada.'],
    'Leek': ['Aumenta el ratio de golpes críticos de Farfetch\'d and Sirfetch\'d en 2 niveles.'],
    'Rusted Sword': ['Transforma a Zacian a su forma Suprema Coronada y le otorga el tipo Acero.'],
    'Rusted Shield': ['Transforma a Zamazenta a su forma Suprema Coronada y le otorga el tipo Acero.'],
    'Throat Spray': ['Aumenta el Ataque Especial en 1 nivel tras ejecutar un ataque de sonido (se consume).'],
    'Eject Pack': ['Intercambia al usuario por un aliado si sus estadísticas se reducen (se consume).'],
    'Heavy-Duty Boots': ['Inmuniza contra trampas del campo (Trampa Rocas, Púas, Red Viscosa, etc.).'],
    'Blunder Policy': ['Aumenta la Velocidad en 2 niveles si un ataque falla debido a la precisión (se consume).'],
    'Room Service': ['Disminuye la Velocidad en 1 nivel si se encuentra activo el Espacio Raro (se consume).'],
    'Utility Umbrella': ['Inmuniza al portador ante todos los modificadores climáticos del Sol y la Lluvia.'],
    'Adamant Crystal': ['Potencia tipos Acero/Dragón de Dialga en 20% y activa su Forma Origen.'],
    'Lustrous Globe': ['Potencia tipos Agua/Dragón de Palkia en 20% y activa su Forma Origen.'],
    'Griseous Core': ['Potencia tipos Fantasma/Dragón de Giratina en 20% y activa su Forma Origen.'],
    'Booster Energy': ['Activa de forma inmediata las habilidades Protosíntesis o Carga Cuark en Pokémon Paradoja.'],
    'Ability Shield': ['Protege la habilidad del portador evitando que sea anulada o modificada por el rival.'],
    'Clear Amulet': ['Evita de forma absoluta que los movimientos o habilidades rivales bajen tus estadísticas.'],
    'Mirror Herb': ['Copiará instantáneamente las subidas de características que realice el rival (se consume).'],
    'Punching Glove': ['Potencia los ataques de puño en un 10% y anula el contacto físico directo al golpear.'],
    'Covert Cloak': ['Inmuniza al portador ante los efectos secundarios adicionales de los ataques rivales.'],
    'Loaded Dice': ['Asegura que los movimientos de ráfagas multigolpe impacten la mayor cantidad de veces.'],
    'Fairy Feather': ['Potencia los movimientos de tipo Hada en un 20%.'],
    'Cornerstone Mask': ['Máscara exclusiva de Ogerpon Cimiento; potencia sus ataques y le otorga robustez.'],
    'Wellspring Mask': ['Máscara exclusiva de Ogerpon Fuente; potencia sus ataques y sube su Def. Especial.'],
    'Hearthflame Mask': ['Máscara exclusiva de Ogerpon Horno; potencia sus ataques e incrementa su poder ofensivo.']
};

function getItemBoostType(item) {
    switch (item) {
        case 'Draco Plate':
        case 'Dragon Fang':
            return 'Dragon';
        case 'Dread Plate':
        case 'Black Glasses':
            return 'Dark';
        case 'Earth Plate':
        case 'Soft Sand':
            return 'Ground';
        case 'Fist Plate':
        case 'Black Belt':
            return 'Fighting';
        case 'Flame Plate':
        case 'Charcoal':
            return 'Fire';
        case 'Icicle Plate':
        case 'Never-Melt Ice':
            return 'Ice';
        case 'Insect Plate':
        case 'Silver Powder':
            return 'Bug';
        case 'Iron Plate':
        case 'Metal Coat':
            return 'Steel';
        case 'Meadow Plate':
        case 'Rose Incense':
        case 'Miracle Seed':
            return 'Grass';
        case 'Mind Plate':
        case 'Odd Incense':
        case 'Twisted Spoon':
            return 'Psychic';
        case 'Pixie Plate':
        case 'Fairy Feather':
            return 'Fairy';
        case 'Sky Plate':
        case 'Sharp Beak':
            return 'Flying';
        case 'Splash Plate':
        case 'Sea Incense':
        case 'Wave Incense':
        case 'Mystic Water':
            return 'Water';
        case 'Spooky Plate':
        case 'Spell Tag':
            return 'Ghost';
        case 'Stone Plate':
        case 'Rock Incense':
        case 'Hard Stone':
            return 'Rock';
        case 'Toxic Plate':
        case 'Poison Barb':
            return 'Poison';
        case 'Zap Plate':
        case 'Magnet':
            return 'Electric';
        case 'Silk Scarf':
        case 'Pink Bow':
        case 'Polkadot Bow':
            return 'Normal';
        default:
            return '';
    }
}

function getItemDualTypeBoost(item, species) {
    switch (item) {
        case 'Adamant Orb':
            if (species === 'Dialga') return 'Steel Dragon';
        case 'Lustrous Orb':
            if (species === 'Palkia') return 'Water Dragon';
        case 'Griseous Orb':
            if ((species === 'Giratina-Origin' && gen <= 8) || (species === 'Giratina' && gen >= 9)) return 'Ghost Dragon';
        case 'Soul Dew':
            if ((species === 'Latias' || species === 'Latios') && gen >= 7) return 'Dragon Psychic';
        case 'Adamant Crystal':
            if (species === 'Dialga-Origin') return 'Steel Dragon';
        case 'Lustrous Globe':
            if (species === 'Palkia-Origin') return 'Water Dragon';
        case 'Griseous Core':
            if (species === 'Giratina-Origin') return 'Ghost Dragon';
        default:
            return '';
    }
}

function getBerryResistType(berry) { //AFECTA A LOS MOVIMIENTOS SUPEREFICACEZ
    switch (berry) {
        case 'Chilan Berry':
            return 'Normal';
        case 'Occa Berry':
            return 'Fire';
        case 'Passho Berry':
            return 'Water';
        case 'Wacan Berry':
            return 'Electric';
        case 'Rindo Berry':
            return 'Grass';
        case 'Yache Berry':
            return 'Ice';
        case 'Chople Berry':
            return 'Fighting';
        case 'Kebia Berry':
            return 'Poison';
        case 'Shuca Berry':
            return 'Ground';
        case 'Coba Berry':
            return 'Flying';
        case 'Payapa Berry':
            return 'Psychic';
        case 'Tanga Berry':
            return 'Bug';
        case 'Charti Berry':
            return 'Rock';
        case 'Kasib Berry':
            return 'Ghost';
        case 'Haban Berry':
            return 'Dragon';
        case 'Colbur Berry':
            return 'Dark';
        case 'Babiri Berry':
            return 'Steel';
        case 'Roseli Berry':
            return 'Fairy';
        default:
            return '';
    }
}

function getFlingPower(item) { //VARIA LA POTENCIA DEL MOVIMIENTO FLING
    isInt = parseInt(item);
    return isNaN(isInt) ?
        (item === 'Iron Ball' || (item === 'Big Nugget' && gen >= 8) || (gen == 4 && item === 'Klutz Iron Ball') ? 130
            : ['Hard Stone', 'Room Service'].indexOf(item) !== -1 ? 100
                : item.indexOf('Plate') !== -1 || ['Deep Sea Tooth', 'Thick Club', 'Grip Claw'].indexOf(item) !== -1 ? 90
                    : (item.indexOf('ite') !== -1 && item == 'Eviolite') || ['Assault Vest', 'Weakness Policy', 'Blunder Policy',
                        'Heavy-Duty Boots', 'Quick Claw', 'Razor Claw', 'Safety Goggles'].indexOf(item) !== -1 ? 80
                        : ['Poison Barb', 'Dragon Fang', 'Power Anklet', 'Power Band', 'Power Belt', 'Power Bracer', 'Power Lens',
                            'Power Weight', 'Burn Drive', 'Chill Drive', 'Douse Drive', 'Shock Drive'].indexOf(item) !== -1 ? 70
                            : ['Adamant Orb', 'Lustrous Orb', 'Macho Brace', 'Leek', 'Rocky Helmet', 'Utility Umbrella', 'Terrain Extender',
                                'Damp Rock', 'Heat Rock'].indexOf(item) !== -1 ? 60
                                : item.indexOf('Memory') !== -1 || ['Sharp Beak', 'Eject Pack'].indexOf(item) !== -1 ? 50
                                    : ['Eviolite', 'Icy Rock', 'Lucky Punch'].indexOf(item) !== -1 ? 40
                                        : ['Black Belt', 'Black Sludge', 'Black Glasses', 'Charcoal', 'Deep Sea Scale', 'Flame Orb', "King's Rock",
                                            'Life Orb', 'Light Ball', 'Magnet', 'Metal Coat', 'Miracle Seed', 'Mystic Water', 'Never-Melt Ice',
                                            'Razor Fang', 'Soul Dew', 'Spell Tag', 'Toxic Orb', 'Twisted Spoon', 'Absorb Bulb', 'Adrenaline Orb',
                                            'Berry Juice', 'Binding Band', 'Eject Button', 'Float Stone', 'Light Clay', 'Luminous Moss',
                                            'Metronome', 'Protective Pads', 'Shell Bell', 'Throat Spray', 'Covert Cloak', 'Loaded Dice',
                                            'Ability Shield', 'Booster Energy', 'Clear Amulet', 'Punching Glove', 'Big Nugget'].indexOf(item) !== -1 ? 30
                                            : 10)
        : isInt;
}

function getNaturalGift(item) { //VARIA LA POTENCIA Y TIPO DEL NATURAL GIFT
    var gift = {
        'Aguav Berry': { 't': 'Dragon', 'p': 80 },
        'Apicot Berry': { 't': 'Ground', 'p': 100 },
        'Aspear Berry': { 't': 'Ice', 'p': 80 },
        'Babiri Berry' : {'t':'Steel','p':80},
        'Belue Berry': { 't': 'Electric', 'p': 100 },
        'Bluk Berry': { 't': 'Fire', 'p': 90 },
        'Charti Berry': { 't': 'Rock', 'p': 80 },
        'Cheri Berry': { 't': 'Fire', 'p': 80 },
        'Chesto Berry' : {'t':'Water','p':80},
        'Chilan Berry' : {'t':'Normal','p':80},
        'Chople Berry' : {'t':'Fighting','p':80},
        'Coba Berry' : {'t':'Flying','p':80},
        'Colbur Berry': { 't': 'Dark', 'p': 80 },
        'Cornn Berry': { 't': 'Bug', 'p': 90 },
        'Custap Berry' : {'t':'Ghost','p':100},
        'Durin Berry' : {'t':'Water','p':100},
        'Enigma Berry': { 't': 'Bug', 'p': 100 },
        'Figy Berry': { 't': 'Bug', 'p': 80 },
        'Ganlon Berry': { 't': 'Ice', 'p': 100 },
        'Grepa Berry': { 't': 'Flying', 'p': 90 },
        'Haban Berry': { 't': 'Dragon', 'p': 80 },
        'Hondew Berry': { 't': 'Ground', 'p': 90 },
        'Iapapa Berry': { 't': 'Dark', 'p': 80 },
        'Jaboca Berry' : {'t':'Dragon','p':100},
        'Kasib Berry' : {'t':'Ghost','p':80},
        'Kebia Berry' : {'t':'Poison','p':80},
        'Kee Berry' : {'t':'Fairy','p':100},
        'Lansat Berry' : {'t':'Flying','p':100},
        'Leppa Berry' : {'t':'Fighting','p':80},
        'Liechi Berry' : {'t':'Grass','p':100},
        'Lum Berry': { 't': 'Flying', 'p': 80 },
        'Mago Berry': { 't': 'Ghost', 'p': 80 },
        'Magost Berry': { 't': 'Rock', 'p': 90 },
        'Maranga Berry' : {'t':'Dark','p':100},
        'Micle Berry': { 't': 'Rock', 'p': 100 },
        'Nanab Berry': { 't': 'Water', 'p': 90 },
        'Nomel Berry': { 't': 'Dragon', 'p': 90 },
        'Occa Berry' : {'t':'Fire','p':80},
        'Oran Berry': { 't': 'Poison', 'p': 80 },
        'Pamtre Berry': { 't': 'Steel', 'p': 90 },
        'Passho Berry' : {'t':'Water','p':80},
        'Payapa Berry': { 't': 'Psychic', 'p': 80 },
        'Pecha Berry': { 't': 'Electric', 'p': 80 },
        'Persim Berry': { 't': 'Ground', 'p': 80 },
        'Petaya Berry': { 't': 'Poison', 'p': 100 },
        'Pinap Berry': { 't': 'Grass', 'p': 90 },
        'Pomeg Berry': { 't': 'Ice', 'p': 90 },
        'Qualot Berry': { 't': 'Poison', 'p': 90 },
        'Rabuta Berry': { 't': 'Ghost', 'p': 90 },
        'Rawst Berry': { 't': 'Grass', 'p': 80 },
        'Razz Berry': { 't': 'Steel', 'p': 80 },
        'Rindo Berry' : {'t':'Grass','p':80},
        'Roseli Berry' : {'t':'Fairy','p':80},
        'Rowap Berry' : {'t':'Dark','p':100},
        'Salac Berry' : {'t':'Fighting','p':100},
        'Shuca Berry' : {'t':'Ground','p':80},
        'Sitrus Berry': { 't': 'Psychic', 'p': 80 },
        'Spelon Berry': { 't': 'Dark', 'p': 90 },
        'Starf Berry': { 't': 'Psychic', 'p': 100 },
        'Tamato Berry': { 't': 'Psychic', 'p': 90 },
        'Tanga Berry' : {'t':'Bug','p':80},
        'Wacan Berry' : {'t':'Electric','p':80},
        'Watmel Berry': { 't': 'Fire', 'p': 100 },
        'Wepear Berry': { 't': 'Electric', 'p': 90 },
        'Wiki Berry': { 't': 'Rock', 'p': 80 },
        'Yache Berry' : {'t':'Ice','p':80}
    }[item];
    if (gift) {
        if (gen < 6) {
            gift.p -= 20;
        }
        return gift;
    }
    return {'t':'Normal','p':1};


}

function getMemoryType(item) {
    switch (item) {
        case 'Bug Memory': return 'Bug';
        case 'Dark Memory': return 'Dark';
        case 'Dragon Memory': return 'Dragon';
        case 'Electric Memory': return 'Electric';
        case 'Fairy Memory': return 'Fairy';
        case 'Fighting Memory': return 'Fighting';
        case 'Fire Memory': return 'Fire';
        case 'Flying Memory': return 'Flying';
        case 'Ghost Memory': return 'Ghost';
        case 'Grass Memory': return 'Grass';
        case 'Ground Memory': return 'Ground';
        case 'Ice Memory': return 'Ice';
        case 'Poison Memory': return 'Poison';
        case 'Psychic Memory': return 'Psychic';
        case 'Rock Memory': return 'Rock';
        case 'Steel Memory': return 'Steel';
        case 'Water Memory': return 'Water';
    }
}

var LOCK_ITEM_LOOKUP = {
    'Giratina-Origin': 'Griseous Orb',
    'abomasnow-mega': 'Abomasite',
    'Absol-mega': 'Absolite',
    'Aerodactyl-mega': 'Aerodactylite',
    'Aggron-mega': 'Aggronite',
    'Alakazam-mega': 'Alakazite',
    'Ampharos-mega': 'Ampharosite',
    'Banette-mega': 'Banettite',
    'Blastoise-mega': 'Blastoisinite',
    'Blaziken-mega': 'Blazikenite',
    'Charizard-mega-x': 'Charizardite X',
    'Charizard-mega-y': 'Charizardite Y',
    'Garchomp-mega': 'Garchompite',
    'Gardevoir-mega': 'Gardevoirite',
    'Gengar-mega': 'Gengarite',
    'Gyarados-mega': 'Gyaradosite',
    'Heracross-mega': 'Heracronite',
    'Houndoom-mega': 'Houndoominite',
    'Kangaskhan-mega': 'Kangaskhanite',
    'Latias-mega': 'Latiasite',
    'Latios-mega': 'Latiosite',
    'Lucario-mega': 'Lucarionite',
    'Manectric-mega': 'Manectite',
    'Mawile-mega': 'Mawilite',
    'Medicham-mega': 'Medichamite',
    'Mewtwo-mega-X': 'Mewtwonite X',
    'Mewtwo-mega-Y': 'Mewtwonite Y',
    'Pinsir-mega': 'Pinsirite',
    'Scizor-mega': 'Scizorite',
    'Tyranitar-mega': 'Tyranitarite',
    'Venusaur-mega': 'Venusaurite',
    'Altaria-mega': 'Altarianite',
    'Audino-mega': 'Audinite',
    'Beedrill-mega': 'Beedrillite',
    'Camerupt-mega': 'Cameruptite',
    'Diancie-mega': 'Diancite',
    'Gallade-mega': 'Galladite',
    'Glalie-mega': 'Glalitite',
    'Lopunny-mega': 'Lopunnite',
    'Metagross-mega': 'Metagrossite',
    'Pidgeot-mega': 'Pidgeotite',
    'Sableye-mega': 'Sablenite',
    'Salamence-mega': 'Salamencite',
    'Sceptile-mega': 'Sceptilite',
    'Sharpedo-mega': 'Sharpedonite',
    'Slowbro-mega': 'Slowbronite',
    'Steelix-mega': 'Steelixite',
    'Swampert-mega': 'Swampertite',
    'Groudon-primal': 'Red Orb',
    'Kyogre-primal': 'Blue Orb',
    'Necrozma-ultra': 'Ultranecrozium Z',
    'Zacian-Crowned': 'Rusted Sword',
    'Zamazenta-Crowned': 'Rusted Shield',
    'Dialga-Origin': 'Adamant Crystal', 
    'Palkia-Origin': 'Lustrous Globe',
    'Ogerpon-Wellspring': 'Wellspring Mask',
    'Ogerpon-Hearthflame': 'Hearthflame Mask',
    'Ogerpon-Cornerstone': 'Cornerstone Mask',
    'Clefable-mega': 'Clefablite',
    'Victreebel-mega': 'Victreebelite',
    'Starmie-mega': 'Starminite',
    'Dragonite-mega': 'Dragoninite',
    'Meganium-mega': 'Meganiumite',
    'Feraligatr-mega': 'Feraligite',
    'Skarmory-mega': 'Skarmorite',
    'Froslass-mega': 'Froslassite',
    'Emboar-mega': 'Emboarite',
    'Excadrill-mega': 'Excadrite',
    'Scolipede-mega': 'Scolipite',
    'Scrafty-mega': 'Scraftinite',
    'Eelektross-mega': 'Eelektrossite',
    'Chandelure-mega': 'Chandelurite',
    'Chesnaught-mega': 'Chesnaughtite',
    'Delphox-mega': 'Delphoxite',
    'Greninja-mega': 'Greninjite',
    'Pyroar-mega': 'Pyroarite',
    'Floette-mega': 'Floettite',
    'Malamar-mega': 'Malamarite',
    'Barbaracle-mega': 'Barbaracite',
    'Dragalge-mega': 'Dragalgite',
    'Hawlucha-mega': 'Hawluchanite',
    'Zygarde-mega': 'Zygardite',
    'Drampa-mega': 'Drampanite',
    'Falinks-mega': 'Falinksite',
    'Heatran-mega': 'Heatranite',
    'Darkrai-mega': 'Darkranite',
    'Zeraora-mega': 'Zeraorite',
    'Raichu-mega-X': 'Raichunite X',
    'Raichu-mega-Y': 'Raichunite Y',
    'Chimecho-mega': 'Chimechite',
    'Absol-mega-Z': 'Absolite Z',
    'Staraptor-mega': 'Staraptite',
    'Garchomp-mega-Z': 'Garchompite Z',
    'Lucario-mega-Z': 'Lucarionite Z',
    'Golurk-mega': 'Golurkite',
    'Meowstic-mega': 'Meowsticite',
    'Crabominable-mega': 'Crabominite',
    'Golisopod-mega': 'Golisopite',
    'Magearna-mega': 'Magearnite',
    'Scovillain-mega': 'Scovillainite',
    'Baxcalibur-mega': 'Baxcalibrite',
    'Tatsugiri-mega': 'Tatsugirinite',
    'Glimmora-mega': 'Glimmoranite',
};

const getBot = (id) => {
    return entities.filter(e => e.id === id)[0] || null;
};

const dist = (id1, id2) => {
    const bot1 = getBot(id1);
    const bot2 = getBot(id2);

    if (bot1 === null || bot2 === null) return Infinity;

    return Math.sqrt(Math.pow(bot1.x - bot2.x, 2) + Math.pow(bot1.y - bot2.y, 2));
};

const entities = [{
    id: 'CX-321',
    name: 'some bot',
    x: 12,
    y: 2
  }, {
    id: 'DR-964',
    name: 'other bot',
    x: 1,
    y: -4
}, {
    id: 'GB-937',
    name: 'super bot',
    x: -5,
    y: 18
}, {
    id: 'RG-121',
    name: 'mega bot',
    x: 1,
    y: -4
}, {
    id: 'TW-154',
    name: 'twitter bot',
    x: 8,
    y: -12
}];

const entitiesLinks = [{
    id1: 'CX-321',
    id2: 'DR-964'
}, {
    id1: 'CX-321',
    id2: 'TW-154'
}, {
    id1: 'CX-321',
    id2: 'RG-121'
}, {
    id1: 'TW-154',
    id2: 'RG-121'
}].map(link => {
    link.dist = dist(link.id1, link.id2);
    return link;
});

const EntitiesRepo = {
    getAll: () => {
        return new Promise((yay, nay) => {
          setTimeout(() => { yay(entities) }, 250);
        });
    },
    get: (id) => {
        const bot = getBot(id);        
        if (bot === null) return null;
        bot.links = entitiesLinks
            .filter(link => (link.id1 === id) || (link.id2 === id))
            .map(link => {
                const linkedBot = getBot(link.id1 === id ? link.id2 : link.id1);
                return {
                    id: linkedBot.id,
                    name: linkedBot.name,
                    dist: link.dist
                };
            });
        return new Promise((yay, nay) => {
          setTimeout(() => { yay(bot) }, 250);
        });
    }
};

export default EntitiesRepo;
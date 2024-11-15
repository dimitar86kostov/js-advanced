import { streamingServiceSelector } from "./streamingServiceSelector.js";
import { describe } from "mocha";
import { assert, expect } from "chai";

describe('test selectingContent', () => {
    it('correct output - happy path', () => {
        assert.equal(streamingServiceSelector.selectingContent('Movie', 'HBO', "Action"),
            "You can watch this Action Movie on HBO. Enjoy your Action-filled experience!",
            'Correct output');

        assert.equal(streamingServiceSelector.selectingContent('TV Show', 'Netflix', "Comedy"),
            "You can watch this Comedy TV Show on Netflix. Enjoy your Comedy-filled experience!",
            'Correct output');

        assert.equal(streamingServiceSelector.selectingContent('TV Show', 'Disney+', "Drama"),
            "You can watch this Drama TV Show on Disney+. Enjoy your Drama-filled experience!",
            'Correct output');
    })

    it('check if genre is incorrect', () => {
        expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', "Porn")).to.throw(
            "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");

        expect(() => streamingServiceSelector.selectingContent('Moviee', 'HBO', "Action")).to.throw("We currently only support 'Movie' or 'TV Show' types.");

        expect(() => streamingServiceSelector.selectingContent('Moviee', 'HBO', "Action")).to.throw("We currently only support 'Movie' or 'TV Show' types.");
    })

    describe('testing availablePlatforms', () => {
        it('test2 happy path', () => {
            assert.equal(streamingServiceSelector.availablePlatforms('HBO', 1),
            "Other available platforms are: Netflix, Disney+.",
            'Correct output');
        })
    });
})

// {type: 'Movie', platform: 'HBO', genre: "Action"}
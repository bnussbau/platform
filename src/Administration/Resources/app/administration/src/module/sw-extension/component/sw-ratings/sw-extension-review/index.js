import template from './sw-extension-review.html.twig';
import './sw-extension-review.scss';

const { date } = Shopware.Utils.format;

const { Component } = Shopware;

Component.register('sw-extension-review', {
    template,

    props: {
        review: {
            type: Object,
            required: true
        },

        producerName: {
            type: String,
            required: true
        }
    },

    computed: {
        lastChangeDate() {
            return this.review.lastChangeDate !== null ? date(this.review.lastChangeDate) : null;
        }
    }
});

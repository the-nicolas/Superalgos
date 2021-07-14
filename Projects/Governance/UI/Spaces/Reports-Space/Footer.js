function newGovernanceReportsFooter() {
    let thisObject = {
        addFooter: addFooter,
        initialize: initialize,
        finalize: finalize
    }

    return thisObject

    function initialize() {

    }

    function finalize() {

    }

    function addFooter() {

        let HTML = ''

        HTML = HTML + '<div id="governance-footer" class="governance-node-html-footer-container">' // Container Starts

        // Buttons Section

        HTML = HTML + '<div class="governance-node-html-footer-table">'
        HTML = HTML + '<div class="governance-footer-row">'

        HTML = HTML + '<div class="governance-footer-cell style="white-space: nowrap; overflow-x: auto;" >' // white-space: nowrap; overflow-x: auto; prevents line breaks when combined with display: inline-block;" in the child elements

        if (UI.projects.education.spaces.docsSpace.currentDocumentBeingRendered !== undefined) {
            HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.sharePage()"><button>SHARE</button></span>'
        }
        HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.scrollToElement(\'governance-space-div\')"><button>TO TOP</button></span>'
        if (UI.projects.education.spaces.docsSpace.previousDocumentBeingRendered !== undefined) {
            HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + UI.projects.education.spaces.docsSpace.previousDocumentBeingRendered.project + '\', \'' + UI.projects.education.spaces.docsSpace.previousDocumentBeingRendered.category + '\', \'' + UI.projects.education.spaces.docsSpace.previousDocumentBeingRendered.type + '\')"><button>BACK</button></span>'
        }
        if (UI.projects.education.spaces.docsSpace.currentBookBeingRendered !== undefined) {
            HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + UI.projects.education.spaces.docsSpace.currentBookBeingRendered.project + '\', \'' + UI.projects.education.spaces.docsSpace.currentBookBeingRendered.category + '\', \'' + UI.projects.education.spaces.docsSpace.currentBookBeingRendered.type + '\')"><button>TO BOOK</button></span>'
        }

        HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + 'Foundations' + '\', \'' + 'Book' + '\', \'' + 'Reviews' + '\')"><button>REVIEWS</button></span>'
        HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + 'Foundations' + '\', \'' + 'Book' + '\', \'' + 'Community Data Mines' + '\')"><button>DATA MINES</button></span>'
        HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + 'Foundations' + '\', \'' + 'Book' + '\', \'' + 'First Steps Tutorials' + '\')"><button>TUTORIALS</button></span>'
        HTML = HTML + '<span style="float: right; display: inline-block;" onClick="UI.projects.education.spaces.docsSpace.navigateTo(\'' + 'Foundations' + '\', \'' + 'Book' + '\', \'' + 'User Manual' + '\')"><button>USER MANUAL</button></span>'

        HTML = HTML + '</div>'

        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        // GitHub Section

        HTML = HTML + '<div class="governance-node-html-footer-table">'
        HTML = HTML + '<div class="governance-footer-row">'

        HTML = HTML + '<div class="governance-footer-cell" style="white-space: nowrap; overflow-x: auto; ">'
        HTML = HTML + '<h3 style="display: inline-block;">Manage Your Superalgos Setup and Contributions!</h3>'
        HTML = HTML + '</div>'

        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-node-html-footer-table">'

        HTML = HTML + '<div class="governance-footer-row">'
        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>About Your Deployment</h4>'
        HTML = HTML + 'Superalgos may run from different branches in the repository. The <code class="governance-footer-code">Master</code> branch features the stable version, and the <code class="governance-footer-code">Develop</code> branch the version in development. Use the <code class="governance-footer-code">Plugins-Docs</code> branch to contribute plugins and to the Docs.'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>Choose the Current Branch</h4>'
        HTML = HTML + 'You are currently running on the <code class="governance-footer-code">' + UI.projects.foundations.utilities.gitBranches.getBranchLabel(UI.projects.education.spaces.docsSpace.currentBranch) + '</code> branch. Switch to:'
        HTML = HTML + '<ul>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeCurrentBranch(\'master\')">Master</a></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeCurrentBranch(\'develop\')">Develop</a></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeCurrentBranch(\'plugins-docs\')">Plugins-Docs</a></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeCurrentBranch(\'next-version\')">Next-Version</a></li>'
        HTML = HTML + '</ul>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>Contributions Branch</h4>'
        HTML = HTML + 'You are currently contributing to the <code class="governance-footer-code">' + UI.projects.foundations.utilities.gitBranches.getBranchLabel(UI.projects.education.spaces.docsSpace.contributionsBranch) + '</code> branch. Switch to:'
        HTML = HTML + '<ul>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeContributionsBranch(\'master\')">Master</code></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeContributionsBranch(\'develop\')">Develop</a></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeContributionsBranch(\'plugins-docs\')">Plugins-Docs</a></li>'
        HTML = HTML + '<li><a href="#" onClick="UI.projects.education.spaces.docsSpace.changeContributionsBranch(\'next-version\')">Next-Version</a></li>'

        HTML = HTML + '</ul>'
        HTML = HTML + '</ul>'
        HTML = HTML + '</div>'

        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        // Community Section

        HTML = HTML + '<div class="governance-node-html-footer-table">'
        HTML = HTML + '<div class="governance-footer-row">'
        HTML = HTML + '<div class="governance-footer-cell" style="white-space: nowrap; overflow-x: auto; ">'
        HTML = HTML + '<h3 style="display: inline-block;">Meet the Community and the Team!</h3>'
        HTML = HTML + '</div>'
        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-node-html-footer-table">'

        HTML = HTML + '<div class="governance-footer-row">'
        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>Join the Conversation</h4>'
        HTML = HTML + '<p>We have a new <a href="https://discord.gg/CGeKC6WQQb" target="_blank">Discord Server</a> with multiple channels, or you may join the original individual Telegram groups listed to the right.</p>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>In Telegram</h4>'
        HTML = HTML + '<ul>'
        HTML = HTML + '<li><a href="https://t.me/superalgoscommunity" target="_blank">Community Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgossupport" target="_blank">Technical Support Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgosdevelop" target="_blank">Developers Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgosmachinelearning" target="_blank">Machine Learning Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgosdocs" target="_blank">Docs Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgosuxui" target="_blank">UX/UI Design Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgoscollaborations" target="_blank">Collaborations Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgoscodebase" target="_blank">Codebase Learning Group</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgos_es" target="_blank">Hablemos en Español!</a></li>'
        HTML = HTML + '<li><a href="https://t.me/superalgos_ru" target="_blank">Говорим по русски!</a></li>'
        HTML = HTML + '</ul>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<h4>Other Resources</h4>'
        HTML = HTML + '<ul>'
        HTML = HTML + '<li><a href="https://t.me/superalgos" target="_blank">Official Announcements</a></li>'
        HTML = HTML + '<li><a href="https://superalgos.org" target="_blank">Features and Functionality</a></li>'
        HTML = HTML + '<li><a href="https://github.com/Superalgos/Superalgos" target="_blank">Main Github Repository</a></li>'
        HTML = HTML + '<li><a href="https://www.youtube.com/c/superalgos" target="_blank">Subscribe in YouTube</a></li>'
        HTML = HTML + '<li><a href="https://twitter.com/superalgos" target="_blank">Follow us on Twitter</a></li>'
        HTML = HTML + '<li><a href="https://www.facebook.com/superalgos" target="_blank">Connect on Facebook</a></li>'
        HTML = HTML + '<li><a href="https://medium.com/Superalgos/" target="_blank">Read the Blog</a></li>'
        HTML = HTML + '</ul>'
        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        HTML = HTML + '<div class="governance-footer-row">'
        HTML = HTML + '<div class="governance-footer-cell">'
        HTML = HTML + '<img src="Images/superalgos-logo-white.png" width="200 px">'
        HTML = HTML + '</div>'
        HTML = HTML + '</div>'
        HTML = HTML + '</div>'

        HTML = HTML + '</div>' // Container Ends

        return HTML
    }
}
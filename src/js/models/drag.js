import {
    drop
} from './drop';

import {
    $,
    elements
} from '../reuse';

import {
    iwindow,
    idocument
} from './iframe';

import {
    mouseOver
} from './position';
import {
    on,
    setStyleData
} from '../views/iframeView';
import { getStyle } from './style';

const dragable = $('.dragable', true);
let data, dragging = false,
    ifr = false,
    appended, p, pos, active;

const activeBox = idocument.createElement('div');
activeBox.id = 'activeBox';

dragable.forEach(cur => {
    cur.addEventListener('mousedown', mousedown)
})



function mousedown(e) {
    if (e.currentTarget.dataset.drag && e.button === 0) {
        //set sate 
        if (e.currentTarget.dataset.drag === '10') {
            ifr = true;
        }

        appended = true;
        dragging = true;

        // set data
        setDragData(e);

        // ready clone
        readyDragClone();

        // scroll position
        data.winheight = iwindow.scrollY;

        // active
        if (!ifr) {
            if (active) {
                // console.log(active)
                pos = mouseOver(e, active.dataset.ele,true);
            }
        } else {
            data.name.style.opacity='.5';
            //active
            active = data.name;
            idocument.getElementById('dev').appendChild(activeBox);
            setStyleData(active, activeBox, '1px solid #00ff13')

            //active style
            getStyle(active);
            
        }

        // change cursor
        cCursor();

        // mouse over
        window.addEventListener('mouseover', appendPos);
        iwindow.addEventListener('mouseover', iappendPos);

    }

    if (e.target.dataset.ele && e.target.dataset.ele === 'body') {
        //active
        active = e.target;
        idocument.getElementById('dev').appendChild(activeBox);
        setStyleData(active, activeBox, '1px solid #00ff13');

        getStyle();

    }



}

function cCursor() {
    if (dragging) {
        document.body.classList.add('grabbing');
        idocument.body.classList.add('grabbing');

    } else {
        document.body.classList.remove('grabbing');
        idocument.body.classList.remove('grabbing');
    }

}

function appendPos(e) {
    iwindow.removeEventListener('mousemove', drag);
    p = document.body;
    window.addEventListener('mousemove', drag);
}

function iappendPos(e) {
    window.removeEventListener('mousemove', drag);
    p = idocument.body;
    iwindow.addEventListener('mousemove', drag);


}

function drag(e) {
    if (!on) {
        document.body.classList.add('not_allowed');
        idocument.body.classList.add('not_allowed');
    } else {
        document.body.classList.remove('not_allowed');
        idocument.body.classList.remove('not_allowed');
    }

    //position 
    pos = mouseOver(e, data.name.dataset.ele);
    // append child

    if (!ifr) {
        p.appendChild(data.clone);
        data.clone.style.top = `${e.clientY}px`;
        data.clone.style.left = `${e.clientX}px`;
    }

    // window scroll
    scrollWin(e);

}

function scrollWin(e) {
    let speed = 5;
    const ifrHeight = iwindow.innerHeight;

    if (ifrHeight - 10 < e.clientY) {
        iwindow.scrollTo(0, data.winheight);
        data.winheight += speed;

    } else if (90 > e.clientY) {
        iwindow.scrollTo(0, data.winheight);
        data.winheight -= speed;
    }
}

function setDragData(e) {
    data = {
        winheight: iwindow.scrollY,
        name: e.target,
        top: e.currentTarget.getClientRects()[0].top,
        left: e.currentTarget.getClientRects()[0].left,
    };

    if (!ifr) {
        data.name = e.currentTarget,
            data.clone = e.currentTarget.cloneNode(true);
        data.height = e.currentTarget.getClientRects()[0].height;
        data.width = e.currentTarget.getClientRects()[0].width;
    }
    // else {
    //     data.inside = $(`.element[data-ele="${e.currentTarget.dataset.ele}"]`);
    //     data.height = data.inside.getClientRects()[0].height;
    //     data.width = data.inside.getClientRects()[0].width;
    //     data.clone = data.inside.cloneNode(true);
    // }

}

function readyDragClone() {
    if (!ifr) {
        data.clone.style.width = `${data.width}px`;
        data.clone.style.height = `${data.height}px`;

        data.clone.style.top = `${data.top}px`;
        data.clone.style.left = `${data.left}px`;
        data.clone.style.position = `fixed`;
        data.clone.classList.add('fade');
    }
}

function resetDrag() {
        document.body.className.includes('not_allowed')?document.body.classList.remove('not_allowed'):0;
        idocument.body.className.includes('not_allowed')?idocument.body.classList.remove('not_allowed'):0;

    if (!ifr) {
        // window.removeEventListener('mousemove', drag);

        // remove fade
        data.clone.remove('fade');


    } else {
        data.name.style.opacity='';
        idocument.body.classList.remove('cursor_dragging');
        // iwindow.removeEventListener('mousemove', drag);

    }

    // remove events
    window.removeEventListener('mouseover', appendPos);
    iwindow.removeEventListener('mouseover', iappendPos);
    window.removeEventListener('mousemove', drag);
    iwindow.removeEventListener('mousemove', drag);

    if (active) {
        setInterval(() => {
            setStyleData(active, activeBox, '1px solid #00ff13')
        }, 100);
    }

}

function mouseup() {
    if (dragging) {
        resetDrag();
        if (!ifr) {
            drop(data, pos);
        } else {
            drop(data, pos, false)
        }
    }
    dragging = false;
    ifr = false;

    // change cursor
    cCursor();
}

window.addEventListener('mouseup', mouseup)
iwindow.addEventListener('mouseup', mouseup)
idocument.body.addEventListener('mousedown', mousedown)

export {
    data,
    mousedown,
    mouseup,
    active
};
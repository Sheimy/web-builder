import {$} from '../reuse';

let top_holder = $('.top_holder');
let left_holder = $('.left_holder');
let right_holder = $('.right_holder');
let middle = $('.middle');

let top_h = $('.top').getClientRects()[0].height;
let left_w = $('.left').getClientRects()[0].width;
let right_w = $('.right').getClientRects()[0].width;

top_holder.style.height = `${top_h}px`;
left_holder.style.width = `${left_w}px`;
right_holder.style.width = `${right_w}px`;


// create the iframe and attach it to the document
const iframe = document.createElement("iframe");
iframe.setAttribute("scrolling", "no");
iframe.setAttribute("frameborder", "0");
iframe.id = "iframe";
middle.appendChild(iframe);

// find the iframe's document and write some content
const idocument = iframe.contentDocument;
idocument.open();
idocument.write(`
                <!DOCTYPE html>
                <html lang="en">
    
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
    
                <body>
                    <h1 id="h">add heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere voluptatem nihil quasi blanditiis ullam eius culpa earum consequuntur quo nemo mollitia, debitis deleniti fuga minus est aliquid repellat rem vero vel ipsa, ipsum qui nam eligendi. Doloremque, voluptate eaque consectetur autem eveniet quidem commodi aliquid pariatur temporibus quia cumque porro! Odio illo maxime et quam quisquam eius libero enim, quidem quibusdam inventore modi est blanditiis dicta mollitia voluptas id fuga nihil excepturi error incidunt perspiciatis aspernatur quaerat. Provident eos suscipit ad magni odit quas amet error eaque nemo! Saepe tempora ducimus dolorem dolorum, velit ea quia. Quas, quos natus delectus doloremque laudantium corrupti laborum in repellendus mollitia reprehenderit ab, est explicabo sint officiis. Repudiandae velit minima fugiat autem deserunt sed incidunt aspernatur nihil ut eos recusandae hic optio illum facilis eaque, dignissimos quis veritatis iure neque adipisci ducimus? Quia perferendis, itaque autem id incidunt est fugit enim consequuntur laboriosam blanditiis ipsa iste, unde amet dolore officiis, accusantium deleniti provident totam optio nam sapiente non quo reprehenderit. In officia ipsa blanditiis aliquam doloribus dolor deleniti eligendi, tenetur possimus itaque, alias laboriosam earum! Fugiat eligendi officiis quibusdam iste, maxime consequatur laudantium esse expedita voluptatibus nobis consequuntur recusandae ipsam eius exercitationem debitis sit labore ad minus quo hic beatae laboriosam obcaecati aperiam. Ipsum nemo suscipit voluptatibus voluptates laborum culpa nostrum pariatur! Dolorum saepe quae dicta necessitatibus labore? Ipsam nostrum hic, culpa beatae quas repellendus obcaecati perferendis deleniti, ad facilis corrupti tenetur eligendi exercitationem qui aperiam dolorum fuga quam neque repellat nulla iure illum saepe quae quod! Tempore architecto recusandae deleniti officiis maxime ipsum, quo accusamus veritatis rem velit, eius nihil corrupti, accusantium enim nemo quae cumque commodi temporibus! Quibusdam necessitatibus recusandae dolor suscipit vitae, est ullam porro harum dicta assumenda corporis alias accusantium iure tempora atque doloribus nam aliquid molestias voluptatibus voluptas?</p>
                    <h1>add heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere voluptatem nihil quasi blanditiis ullam eius culpa earum consequuntur quo nemo mollitia, debitis deleniti fuga minus est aliquid repellat rem vero vel ipsa, ipsum qui nam eligendi. Doloremque, voluptate eaque consectetur autem eveniet quidem commodi aliquid pariatur temporibus quia cumque porro! Odio illo maxime et quam quisquam eius libero enim, quidem quibusdam inventore modi est blanditiis dicta mollitia voluptas id fuga nihil excepturi error incidunt perspiciatis aspernatur quaerat. Provident eos suscipit ad magni odit quas amet error eaque nemo! Saepe tempora ducimus dolorem dolorum, velit ea quia. Quas, quos natus delectus doloremque laudantium corrupti laborum in repellendus mollitia reprehenderit ab, est explicabo sint officiis. Repudiandae velit minima fugiat autem deserunt sed incidunt aspernatur nihil ut eos recusandae hic optio illum facilis eaque, dignissimos quis veritatis iure neque adipisci ducimus? Quia perferendis, itaque autem id incidunt est fugit enim consequuntur laboriosam blanditiis ipsa iste, unde amet dolore officiis, accusantium deleniti provident totam optio nam sapiente non quo reprehenderit. In officia ipsa blanditiis aliquam doloribus dolor deleniti eligendi, tenetur possimus itaque, alias laboriosam earum! Fugiat eligendi officiis quibusdam iste, maxime consequatur laudantium esse expedita voluptatibus nobis consequuntur recusandae ipsam eius exercitationem debitis sit labore ad minus quo hic beatae laboriosam obcaecati aperiam. Ipsum nemo suscipit voluptatibus voluptates laborum culpa nostrum pariatur! Dolorum saepe quae dicta necessitatibus labore? Ipsam nostrum hic, culpa beatae quas repellendus obcaecati perferendis deleniti, ad facilis corrupti tenetur eligendi exercitationem qui aperiam dolorum fuga quam neque repellat nulla iure illum saepe quae quod! Tempore architecto recusandae deleniti officiis maxime ipsum, quo accusamus veritatis rem velit, eius nihil corrupti, accusantium enim nemo quae cumque commodi temporibus! Quibusdam necessitatibus recusandae dolor suscipit vitae, est ullam porro harum dicta assumenda corporis alias accusantium iure tempora atque doloribus nam aliquid molestias voluptatibus voluptas?</p>
                    <h1>add heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere voluptatem nihil quasi blanditiis ullam eius culpa earum consequuntur quo nemo mollitia, debitis deleniti fuga minus est aliquid repellat rem vero vel ipsa, ipsum qui nam eligendi. Doloremque, voluptate eaque consectetur autem eveniet quidem commodi aliquid pariatur temporibus quia cumque porro! Odio illo maxime et quam quisquam eius libero enim, quidem quibusdam inventore modi est blanditiis dicta mollitia voluptas id fuga nihil excepturi error incidunt perspiciatis aspernatur quaerat. Provident eos suscipit ad magni odit quas amet error eaque nemo! Saepe tempora ducimus dolorem dolorum, velit ea quia. Quas, quos natus delectus doloremque laudantium corrupti laborum in repellendus mollitia reprehenderit ab, est explicabo sint officiis. Repudiandae velit minima fugiat autem deserunt sed incidunt aspernatur nihil ut eos recusandae hic optio illum facilis eaque, dignissimos quis veritatis iure neque adipisci ducimus? Quia perferendis, itaque autem id incidunt est fugit enim consequuntur laboriosam blanditiis ipsa iste, unde amet dolore officiis, accusantium deleniti provident totam optio nam sapiente non quo reprehenderit. In officia ipsa blanditiis aliquam doloribus dolor deleniti eligendi, tenetur possimus itaque, alias laboriosam earum! Fugiat eligendi officiis quibusdam iste, maxime consequatur laudantium esse expedita voluptatibus nobis consequuntur recusandae ipsam eius exercitationem debitis sit labore ad minus quo hic beatae laboriosam obcaecati aperiam. Ipsum nemo suscipit voluptatibus voluptates laborum culpa nostrum pariatur! Dolorum saepe quae dicta necessitatibus labore? Ipsam nostrum hic, culpa beatae quas repellendus obcaecati perferendis deleniti, ad facilis corrupti tenetur eligendi exercitationem qui aperiam dolorum fuga quam neque repellat nulla iure illum saepe quae quod! Tempore architecto recusandae deleniti officiis maxime ipsum, quo accusamus veritatis rem velit, eius nihil corrupti, accusantium enim nemo quae cumque commodi temporibus! Quibusdam necessitatibus recusandae dolor suscipit vitae, est ullam porro harum dicta assumenda corporis alias accusantium iure tempora atque doloribus nam aliquid molestias voluptatibus voluptas?</p>
                    <h1>add heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere voluptatem nihil quasi blanditiis ullam eius culpa earum consequuntur quo nemo mollitia, debitis deleniti fuga minus est aliquid repellat rem vero vel ipsa, ipsum qui nam eligendi. Doloremque, voluptate eaque consectetur autem eveniet quidem commodi aliquid pariatur temporibus quia cumque porro! Odio illo maxime et quam quisquam eius libero enim, quidem quibusdam inventore modi est blanditiis dicta mollitia voluptas id fuga nihil excepturi error incidunt perspiciatis aspernatur quaerat. Provident eos suscipit ad magni odit quas amet error eaque nemo! Saepe tempora ducimus dolorem dolorum, velit ea quia. Quas, quos natus delectus doloremque laudantium corrupti laborum in repellendus mollitia reprehenderit ab, est explicabo sint officiis. Repudiandae velit minima fugiat autem deserunt sed incidunt aspernatur nihil ut eos recusandae hic optio illum facilis eaque, dignissimos quis veritatis iure neque adipisci ducimus? Quia perferendis, itaque autem id incidunt est fugit enim consequuntur laboriosam blanditiis ipsa iste, unde amet dolore officiis, accusantium deleniti provident totam optio nam sapiente non quo reprehenderit. In officia ipsa blanditiis aliquam doloribus dolor deleniti eligendi, tenetur possimus itaque, alias laboriosam earum! Fugiat eligendi officiis quibusdam iste, maxime consequatur laudantium esse expedita voluptatibus nobis consequuntur recusandae ipsam eius exercitationem debitis sit labore ad minus quo hic beatae laboriosam obcaecati aperiam. Ipsum nemo suscipit voluptatibus voluptates laborum culpa nostrum pariatur! Dolorum saepe quae dicta necessitatibus labore? Ipsam nostrum hic, culpa beatae quas repellendus obcaecati perferendis deleniti, ad facilis corrupti tenetur eligendi exercitationem qui aperiam dolorum fuga quam neque repellat nulla iure illum saepe quae quod! Tempore architecto recusandae deleniti officiis maxime ipsum, quo accusamus veritatis rem velit, eius nihil corrupti, accusantium enim nemo quae cumque commodi temporibus! Quibusdam necessitatibus recusandae dolor suscipit vitae, est ullam porro harum dicta assumenda corporis alias accusantium iure tempora atque doloribus nam aliquid molestias voluptatibus voluptas?</p>
                    <h1>add heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere voluptatem nihil quasi blanditiis ullam eius culpa earum consequuntur quo nemo mollitia, debitis deleniti fuga minus est aliquid repellat rem vero vel ipsa, ipsum qui nam eligendi. Doloremque, voluptate eaque consectetur autem eveniet quidem commodi aliquid pariatur temporibus quia cumque porro! Odio illo maxime et quam quisquam eius libero enim, quidem quibusdam inventore modi est blanditiis dicta mollitia voluptas id fuga nihil excepturi error incidunt perspiciatis aspernatur quaerat. Provident eos suscipit ad magni odit quas amet error eaque nemo! Saepe tempora ducimus dolorem dolorum, velit ea quia. Quas, quos natus delectus doloremque laudantium corrupti laborum in repellendus mollitia reprehenderit ab, est explicabo sint officiis. Repudiandae velit minima fugiat autem deserunt sed incidunt aspernatur nihil ut eos recusandae hic optio illum facilis eaque, dignissimos quis veritatis iure neque adipisci ducimus? Quia perferendis, itaque autem id incidunt est fugit enim consequuntur laboriosam blanditiis ipsa iste, unde amet dolore officiis, accusantium deleniti provident totam optio nam sapiente non quo reprehenderit. In officia ipsa blanditiis aliquam doloribus dolor deleniti eligendi, tenetur possimus itaque, alias laboriosam earum! Fugiat eligendi officiis quibusdam iste, maxime consequatur laudantium esse expedita voluptatibus nobis consequuntur recusandae ipsam eius exercitationem debitis sit labore ad minus quo hic beatae laboriosam obcaecati aperiam. Ipsum nemo suscipit voluptatibus voluptates laborum culpa nostrum pariatur! Dolorum saepe quae dicta necessitatibus labore? Ipsam nostrum hic, culpa beatae quas repellendus obcaecati perferendis deleniti, ad facilis corrupti tenetur eligendi exercitationem qui aperiam dolorum fuga quam neque repellat nulla iure illum saepe quae quod! Tempore architecto recusandae deleniti officiis maxime ipsum, quo accusamus veritatis rem velit, eius nihil corrupti, accusantium enim nemo quae cumque commodi temporibus! Quibusdam necessitatibus recusandae dolor suscipit vitae, est ullam porro harum dicta assumenda corporis alias accusantium iure tempora atque doloribus nam aliquid molestias voluptatibus voluptas?</p>
                </body>
    
                </html>`);
idocument.close();
iframe.height = iframe.contentWindow.document.querySelector('html').getClientRects()[0].height;

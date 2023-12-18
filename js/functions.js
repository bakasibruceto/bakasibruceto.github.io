export function techCards(ids, images, titles) {
    let html = '';

    for (let i = 0; i < ids.length; i++) {
        html += `
            <div class="flex items-start gap-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <span class="rounded-lg">
                    <img class="w-20 h-20" src="${images[i]}" alt="${titles[i]}">
                </span>
                <div>
                    <h2 class="text-lg font-bold">${titles[i]}</h2>
                    <div class="flex items-center" id="${ids[i]}"></div>
                </div>
            </div>
        `;
    }

    document.getElementById('tech').innerHTML = html;
}

export function profile(images, classes) {
    const basePath = "../img/hair/";
    let html = '';

    images.forEach((image, index) => {
        html += `<img class="rounded-3xl w-auto absolute top-0 left-0 ${classes[index]}" src="${basePath}${image}.PNG" alt="Description of the image" loading="lazy">\n`;
    });

    document.getElementById('imageContainer').innerHTML = html;
}

export function rating(containerId, rating) {
    const numStars = 5;
    // Select the container where you want to append the SVGs
    const container = document.getElementById(containerId);

    for (let i = 0; i < numStars; i++) {
        // Create a new SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-4 h-4 ms-1 text-gray-300 dark:text-gray-500');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('viewBox', '0 0 22 20');

        // Create a new path element
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z');

        // Change the fill color of the path based on the rating
        if (i < rating) {
            path.setAttribute('fill', '#FFD700'); // Gold for rated stars
        } 

        // Append the path to the SVG
        svg.appendChild(path);

        // Append the SVG to the container
        container.appendChild(svg);
    }
}




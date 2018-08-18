$(document).ready(function()
{
        $('button').click(function()
        {
                var tarefa = prompt("Digite a tarefa a ser adicionada:");

                if (tarefa.length === 0 || !tarefa.trim())                 // se o tamanho da string eh 0, ou se fica vazia sem espacos
                {
                        alert("Digite alguma tarefa!");
                } else {
                        var txt = $("<li></li>").text(tarefa);        // criar texto com jQuery
                        $("ul").append(txt);                          // Append novos elementos
                        $('li').click(function(){$(this).remove();}); // remove o <li> clicado
                }
        })

})

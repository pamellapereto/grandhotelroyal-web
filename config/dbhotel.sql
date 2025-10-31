-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30/10/2025 às 21:32
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbhotel`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `adicionais`
--

CREATE TABLE `adicionais` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `preco` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `adicionais`
--

INSERT INTO `adicionais` (`id`, `nome`, `preco`) VALUES
(1, 'Fronha', 1.23),
(4, 'Café da Manha', 35),
(5, 'Shampoo', 15),
(6, 'Janela', 75),
(7, 'Pessoa', 60.5),
(8, 'teste rota', 123),
(9, 'teste rota', 123);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cargos`
--

CREATE TABLE `cargos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cargos`
--

INSERT INTO `cargos` (`id`, `nome`) VALUES
(1, 'admin'),
(2, 'funcionario'),
(3, 'cliente');

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cargo_id` int(11) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `cpf`, `telefone`, `email`, `senha`, `cargo_id`) VALUES
(2, 'Fulano', '123', '159999999', 'teste@teste.com', '$2y$10$2JM98S0x6HLmAMCA0bXOxON/ERwC4l8POXPv7pTLt1h..r/vzJKjS', 3),
(3, 'Jeff Rayner', '123', '159999999', 'jeff@g.com', '$2y$10$qi1KcNQIDPLSJEAt7Uxd0uexviL2EGw4dIF1Vd.Unfx9xSR5Qk7ne', 3),
(4, 'beltrano', '123', '159999999', 'beltrano@g.com', '$2y$10$HAfl9rGr2RTQo93o1NuANOq8q3moJBiLQC.YYN9FJCs1dyH/Arqky', 3),
(5, 'Pamella Pereto', '123456', '147258', 'pamella@email.com', '$2y$10$/Dq8eRv9RCr6hdyWsVUFpOhBYcB0cd3g4aRQIhMJNlRox.LEbCMhK', 3),
(6, 'uira', '123', '123', 'uira@email.com', '$2y$10$hUvdB6srJAFeiKuAFHF5qOqAamW1W1ZQCZPeijKV78EeycTQJDMOC', 3),
(7, 'Matheus Possonato', '123456', '789456', 'possonato@gmail.com', '$2y$10$hmzLKf8NLV7YvOFDKe7SF.pvnPPxfrHNU9dH486PWObjpmcAj..1G', 3),
(8, 'João', '123456', '789456', 'joao@gmail.com', '$2y$10$d8.IcFeP83nJFufPeo0OEu2jPtXChq3eihMMbtMKG9jl8sMUruGN2', 3),
(9, 'Senha: mechamadelord', '123456789', '15987654321', 'lord@hihi.com', '$2y$10$D2.OLXHFGhL7do4K88ov..Sss286Aw6ctNBpTI0qT8Ic1s4.7E/KW', 3),
(10, 'Senha: mechamadelord1', '123456789', '15987654321', 'lord1@hihi.com', '$2y$10$eVvzbJ9WcR0RMPsp5RMWce87WgQp1bNX.oDsq9fZy729osCcSNMqG', 3),
(11, 'Senha: mechamadelord2', '123456789', '15987654321', 'lord2@hihi.com', '$2y$10$loBUCtiBzzJ7gGdjAJxSr.3CHxAHV/x2RBFT3rKznBcHFuVsQRXi.', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fotos`
--

INSERT INTO `fotos` (`id`, `nome`) VALUES
(1, '254339fc5550103eaa1976394eb23140.jpg'),
(2, '5b3cec015e876eb9e8b1e535c2f39676.jpg'),
(3, '78106be0249fe3f16d0071959bd32550.jpg'),
(4, '19d2ce994c7c4a0617bead9ca69bbe2d.jpg'),
(5, 'f086e2dec8f3f16d41c59bea01d12e8c.jpg'),
(6, '85338a873b8aa6dbcda2b9799c8bab02.jpg'),
(7, '45e67e464832c3cdc6a87d4e76170db5.jpg'),
(8, 'aa427f294455cfe319b5f0176b9efb38.jpg'),
(9, 'ef9a3f88beb957707e94211e418890d1.jpg'),
(10, '5704dedb547af2843d540ecbcf750b31.jpg'),
(11, 'a9e3197ff80b83b28c3c430db3ca7210.jpg'),
(12, '16a52b5ffa805f20dbd61c750e3eaad0.jpg'),
(13, 'b3eeff21287d1b86c1234721f9069a24.jpg'),
(14, '738358791a27440d6557a9f7e84a67ad.jpg'),
(15, '8c19cda4bdd0a9dc42f6647ffcb101bc.jpg'),
(16, '7a10783f236334b1dfc8ac93597d67b2.jpg'),
(17, '2a10632fde6878adeac18c29b3240968.jpg'),
(18, '01959c2e044ee4a25816012e9178522d.jpg'),
(19, 'b3817a20c7bca1afce0022fbce04722b.jpg'),
(20, '259fc29dd65dfc4f6cb0518ab0ad3fbc.jpg'),
(21, '5b9b5ac100186f35df1002fc9ca62c87.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `data` date NOT NULL DEFAULT current_timestamp(),
  `pagamento` enum('debido','credito','pix') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario_id`, `cliente_id`, `data`, `pagamento`) VALUES
(1, NULL, 4, '2025-09-24', 'pix'),
(11, NULL, 3, '2025-10-15', 'pix'),
(20, NULL, 3, '2025-10-15', 'pix'),
(34, NULL, 3, '2025-10-21', 'pix'),
(36, NULL, 9, '2025-10-30', 'pix');

-- --------------------------------------------------------

--
-- Estrutura para tabela `quartos`
--

CREATE TABLE `quartos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `qtd_cama_casal` int(11) NOT NULL,
  `qtd_cama_solteiro` int(11) NOT NULL,
  `preco` double NOT NULL,
  `disponivel` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `quartos`
--

INSERT INTO `quartos` (`id`, `nome`, `numero`, `qtd_cama_casal`, `qtd_cama_solteiro`, `preco`, `disponivel`) VALUES
(5, 'Quarto Supremo', 250, 3, 1, 350, 1),
(7, 'Quarto Teste', 99, 1, 1, 350, 1),
(8, 'Quarto Atualizado2', 8000, 1, 0, 1.99, 1),
(9, 'Quarto Casal', 199, 1, 1, 654, 1),
(10, 'Deluxe', 130, 1, 0, 39.9, 1),
(11, 'TESTE', 123, 1, 0, 500.6, 1),
(12, 'quarto com foto', 555, 2, 0, 899, 1),
(13, 'quarto com foto', 555, 2, 0, 899, 1),
(14, 'quarto com foto', 555, 2, 0, 899, 1),
(15, 'quarto com foto', 555, 2, 0, 899, 1),
(16, 'quarto com foto', 555, 2, 0, 899, 1),
(17, 'quarto com foto', 555, 2, 0, 899, 1),
(18, 'quarto com foto', 555, 2, 0, 899, 1),
(19, 'quarto com foto', 555, 2, 0, 899, 1),
(20, 'quarto com foto', 555, 2, 0, 899, 1),
(21, 'quarto com foto', 555, 2, 0, 899, 1),
(22, 'quarto com foto', 555, 2, 0, 899, 1),
(23, 'quarto com foto', 555, 2, 0, 899, 1),
(24, 'quarto com foto', 555, 2, 0, 899, 1),
(25, 'quarto com foto', 555, 2, 0, 899, 1),
(26, 'quarto com foto', 555, 2, 0, 899, 1),
(27, 'quarto com foto', 555, 2, 0, 899, 1),
(28, 'quarto com foto', 555, 2, 0, 899, 1),
(29, 'quarto com foto', 555, 2, 0, 899, 1),
(30, 'quarto com foto', 555, 2, 0, 899, 1),
(33, 'quarto com foto', 555, 2, 0, 899, 1),
(34, 'quarto com foto', 555, 2, 0, 899, 1),
(35, 'teste', 1, 1, 1, 1, 1),
(36, 'a', 4, 1, 1, 4, 0),
(37, 'a', 180, 1, 1, 5.9, 0),
(38, 'A', 1, 1, 1, 55, 0),
(39, 'A', 1, 1, 1, 555, 0),
(40, 'TESTE QUARTO COM FOTOS', 11, 1, 1, 55, 0),
(41, 'AA', 1, 1, 1, 44, 0),
(42, 'yrsdytytr', 55, 1, 1, 5, 0),
(43, 'Teste upload quarto com fotos', 150, 1, 1, 55, 1),
(44, 'Teste novo upload quarto com fotos', 150, 1, 1, 55, 1),
(45, 'ff', 1, 1, 1, 44, 1),
(46, 'teee', 454, 1, 3, 656, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `quartos_fotos`
--

CREATE TABLE `quartos_fotos` (
  `quarto_id` int(11) NOT NULL,
  `foto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `quartos_fotos`
--

INSERT INTO `quartos_fotos` (`quarto_id`, `foto_id`) VALUES
(33, 2),
(34, 3),
(35, 4),
(36, 5),
(37, 7),
(38, 9),
(39, 10),
(40, 11),
(41, 12),
(42, 13),
(43, 15),
(44, 16),
(45, 18),
(46, 20),
(46, 21);

-- --------------------------------------------------------

--
-- Estrutura para tabela `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `quarto_id` int(11) NOT NULL,
  `adicional_id` int(11) DEFAULT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `reservas`
--

INSERT INTO `reservas` (`id`, `pedido_id`, `quarto_id`, `adicional_id`, `data_inicio`, `data_fim`) VALUES
(1, 1, 9, 1, '2025-09-15 14:00:00', '2025-09-24 12:00:00'),
(2, 1, 5, 1, '2025-09-15 14:00:00', '2025-09-24 12:00:00'),
(3, 1, 10, 1, '2025-09-15 14:00:00', '2025-09-24 12:00:00'),
(4, 11, 7, NULL, '2025-06-01 00:00:00', '2025-06-05 00:00:00'),
(5, 11, 8, NULL, '2025-06-01 00:00:00', '2025-06-05 00:00:00'),
(6, 20, 10, NULL, '2025-06-01 00:00:00', '2025-06-05 00:00:00'),
(7, 34, 5, NULL, '2026-01-01 00:00:00', '2026-01-08 00:00:00'),
(8, 34, 9, NULL, '2026-01-01 00:00:00', '2026-01-08 00:00:00'),
(9, 34, 10, NULL, '2026-01-01 00:00:00', '2026-01-08 00:00:00'),
(10, 36, 7, NULL, '2026-06-01 00:00:00', '2026-06-05 00:00:00'),
(11, 36, 8, NULL, '2026-06-01 00:00:00', '2026-06-05 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cargo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `cargo_id`) VALUES
(1, 'Administrador', 'admin@admin.com', '@admin123', 1),
(2, 'fulano', 'fulano@email.com', '$2y$10$E7eFY7leQlyRPk4q0vdtiufMFd4iHwHUsVGj.RsN.WKf11ZsxvVji', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `adicionais`
--
ALTER TABLE `adicionais`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices de tabela `cargos`
--
ALTER TABLE `cargos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `cargo_id` (`cargo_id`);

--
-- Índices de tabela `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Índices de tabela `quartos`
--
ALTER TABLE `quartos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Índices de tabela `quartos_fotos`
--
ALTER TABLE `quartos_fotos`
  ADD PRIMARY KEY (`quarto_id`,`foto_id`),
  ADD KEY `foto_id` (`foto_id`),
  ADD KEY `quarto_id_2` (`quarto_id`),
  ADD KEY `quarto_id` (`quarto_id`);

--
-- Índices de tabela `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `pedido_id` (`pedido_id`),
  ADD KEY `quarto_id` (`quarto_id`),
  ADD KEY `adicional_id` (`adicional_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `cargo_id` (`cargo_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adicionais`
--
ALTER TABLE `adicionais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `cargos`
--
ALTER TABLE `cargos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de tabela `quartos`
--
ALTER TABLE `quartos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `quartos_fotos`
--
ALTER TABLE `quartos_fotos`
  MODIFY `quarto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `quartos_fotos`
--
ALTER TABLE `quartos_fotos`
  ADD CONSTRAINT `quartos_fotos_ibfk_1` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `quartos_fotos_ibfk_2` FOREIGN KEY (`foto_id`) REFERENCES `fotos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`quarto_id`) REFERENCES `quartos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `reservas_ibfk_3` FOREIGN KEY (`adicional_id`) REFERENCES `adicionais` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
